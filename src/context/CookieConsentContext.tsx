import React, { createContext, useContext, useState, useEffect } from "react";

interface CookieConsentContextType {
  consent: {
    essential: boolean; // Zorunlu çerezler
    functional: boolean; // Site fonksiyonları için gerekli
    analytics: boolean; // Analytics
  };
  setConsent: (consent: {
    essential: boolean;
    functional: boolean;
    analytics: boolean;
  }) => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
}

const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showBanner, setShowBanner] = useState(true);
  const [consent, setConsent] = useState({
    essential: true, // Her zaman aktif
    functional: false,
    analytics: false,
  });

  useEffect(() => {
    // Modern tarayıcılar için CookieStore API kullanımı
    if ("cookieStore" in window) {
      const checkConsent = async () => {
        try {
          const cookie = await window.cookieStore.get("cookie_consent");
          if (cookie?.value) {
            setConsent(JSON.parse(cookie.value));
            setShowBanner(false);
          }
        } catch (error) {
          console.error("Cookie okuma hatası:", error);
        }
      };
      checkConsent();
    } else {
      // Fallback için localStorage
      const savedConsent = localStorage.getItem("cookie_consent");
      if (savedConsent) {
        setConsent(JSON.parse(savedConsent));
        setShowBanner(false);
      }
    }
  }, []);

  const handleSetConsent = async (newConsent: {
    essential: boolean;
    functional: boolean;
    analytics: boolean;
  }) => {
    setConsent(newConsent);

    // Modern tarayıcılar için CookieStore API kullanımı
    if ("cookieStore" in window) {
      try {
        await window.cookieStore.set({
          name: "cookie_consent",
          value: JSON.stringify(newConsent),
          expires: Date.now() + 365 * 24 * 60 * 60 * 1000, // 1 yıl
          sameSite: "strict",
          secure: true,
        });
      } catch (error) {
        console.error("Cookie yazma hatası:", error);
        // Fallback
        localStorage.setItem("cookie_consent", JSON.stringify(newConsent));
      }
    } else {
      // Fallback için localStorage
      localStorage.setItem("cookie_consent", JSON.stringify(newConsent));
    }
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        setConsent: handleSetConsent,
        showBanner,
        setShowBanner,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
};
