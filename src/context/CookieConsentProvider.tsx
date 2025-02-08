import React, { useEffect, useState } from "react";
import { CookieConsentContext, CookieConsent } from "./CookieConsentContext";

// Provider oluşturulması

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showBanner, setShowBanner] = useState(true);
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true, // Zorunlu çerezler her zaman açık
    functional: false,
    analytics: false,
  });

  useEffect(() => {
    const checkConsent = async () => {
      try {
        // Cookie Store API desteği varsa
        if ("cookieStore" in window && window.cookieStore?.get) {
          const cookie = await window.cookieStore.get("cookie_consent");
          if (cookie?.value) {
            setConsent(JSON.parse(cookie.value));
            setShowBanner(false);
            return;
          }
        }
      } catch (error) {
        console.warn(
          "Cookie Store API desteklenmiyor veya hata oluştu:",
          error
        );
      }

      // Fallback: localStorage kullanımı
      const savedConsent = localStorage.getItem("cookie_consent");
      if (savedConsent) {
        setConsent(JSON.parse(savedConsent));
        setShowBanner(false);
      }
    };

    checkConsent();
  }, []);

  const handleSetConsent = async (newConsent: CookieConsent) => {
    setConsent(newConsent);

    try {
      // Cookie Store API desteği ile çerez yazma
      if ("cookieStore" in window && window.cookieStore?.set) {
        await window.cookieStore.set({
          name: "cookie_consent",
          value: JSON.stringify(newConsent),
          expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 yıl
          sameSite: "strict",
          secure: true,
        });
        return;
      }
    } catch (error) {
      console.warn("Cookie Store API ile çerez yazılamadı:", error);
    }

    // Fallback: localStorage kullanımı
    localStorage.setItem("cookie_consent", JSON.stringify(newConsent));
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

export default CookieConsentProvider;
