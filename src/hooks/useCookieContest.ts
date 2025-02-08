import { useContext } from "react";
import { CookieConsentContext } from "../context/CookieConsentContext";

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent, CookieConsentProvider içerisinde kullanılmalıdır."
    );
  }
  return context;
};
