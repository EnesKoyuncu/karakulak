import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCookieConsent } from "../hooks/useCookieConsent";
import "../styles/CookieBanner.css";
import { useLanguage } from "../hooks/useLanguage";

interface ITranslation {
  heading: string;
  message: string;
  acceptAll: string;
  acceptEssential: string;
  customize: string;
}

interface ITranslationsLanguageSupport {
  tr: ITranslation;
  en: ITranslation;
}

const translations: ITranslationsLanguageSupport = {
  tr: {
    heading: "Çerez Tercihleri",
    message:
      "Web sitemizde size en iyi deneyimi sunabilmek için çerezleri kullanıyoruz. Zorunlu çerezler site fonksiyonları için gereklidir. Diğer çerezler, site deneyiminizi iyileştirmek ve analiz için kullanılır.",
    acceptAll: "Tümünü Kabul Et",
    acceptEssential: "Sadece Zorunlu Çerezler",
    customize: "Özelleştir",
  },
  en: {
    heading: "Cookie Preferences",
    message:
      "We use cookies on our website to give you the best experience. Essential cookies are required for site functionality. Other cookies are used to enhance your experience and for analytics.",
    acceptAll: "Accept All",
    acceptEssential: "Accept Only Essential Cookies",
    customize: "Customize",
  },
};

const CookieBanner: React.FC = () => {
  const { showBanner, setShowBanner, setConsent } = useCookieConsent();
  const { language } = useLanguage();

  const texts = translations[language as keyof ITranslationsLanguageSupport];

  const handleAcceptAll = () => {
    setConsent({
      essential: true,
      functional: true,
      analytics: true,
    });
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    setConsent({
      essential: true,
      functional: false,
      analytics: false,
    });
    setShowBanner(false);
  };

  const handleCustomize = () => {
    // Özel ayarlar modalı açılabilir. Şimdilik sadece temel ayar veriyoruz.
    setConsent({
      essential: true,
      functional: false,
      analytics: false,
    });
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          className="cookie-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <div className="cookie-content">
            <h3>{texts.heading}</h3>
            <p>{texts.message}</p>
            <div className="cookie-buttons">
              <button onClick={handleAcceptAll} className="accept-all-button">
                {texts.acceptAll}
              </button>
              <button
                onClick={handleAcceptEssential}
                className="essential-button"
              >
                {texts.acceptEssential}
              </button>
              <button onClick={handleCustomize} className="customize-button">
                {texts.customize}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
