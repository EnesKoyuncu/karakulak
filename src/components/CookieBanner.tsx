import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCookieConsent } from "../hooks/useCookieContest";
import "../styles/CookieBanner.css";

const CookieBanner: React.FC = () => {
  const { showBanner, setShowBanner, setConsent } = useCookieConsent();

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
    // Burada özel ayarlar modalı açılabilir
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
            <h3>Çerez Tercihleri</h3>
            <p>
              Web sitemizde size en iyi deneyimi sunabilmek için çerezleri
              kullanıyoruz. Zorunlu çerezler site fonksiyonları için gereklidir.
              Diğer çerezler site deneyiminizi iyileştirmek ve analiz için
              kullanılır.
            </p>
            <div className="cookie-buttons">
              <button onClick={handleAcceptAll} className="accept-all-button">
                Tümünü Kabul Et
              </button>
              <button
                onClick={handleAcceptEssential}
                className="essential-button"
              >
                Sadece Zorunlu Çerezler
              </button>
              <button onClick={handleCustomize} className="customize-button">
                Özelleştir
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
