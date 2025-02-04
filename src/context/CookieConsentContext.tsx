import React, { createContext, useContext, useState, useEffect } from "react";

interface CookieConsentContextType {
  consent: {
    analytics: boolean;
    maps: boolean;
  };
  setConsent: (consent: { analytics: boolean; maps: boolean }) => void;
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
    analytics: false,
    maps: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookie_consent");
    if (savedConsent) {
      setConsent(JSON.parse(savedConsent));
      setShowBanner(false);
    }
  }, []);

  const handleSetConsent = (newConsent: {
    analytics: boolean;
    maps: boolean;
  }) => {
    setConsent(newConsent);
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

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
};
