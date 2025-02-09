import { createContext } from "react";

// Tip tanımlamaları
export interface CookieConsent {
  essential: boolean; // Zorunlu çerezler
  functional: boolean; // İşlevsel çerezler
  analytics: boolean; // Analitik çerezler
}

export interface CookieConsentContextType {
  consent: CookieConsent;
  setConsent: (consent: CookieConsent) => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
}

// Context oluşturulması
export const CookieConsentContext = createContext<
  CookieConsentContextType | undefined
>(undefined);
