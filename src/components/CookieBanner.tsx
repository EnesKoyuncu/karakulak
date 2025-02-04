import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCookieConsent } from "../context/CookieConsentContext";
import "../styles/CookieBanner.css";

const CookieBanner: React.FC = () => {
  const { showBanner, setShowBanner, setConsent } = useCookieConsent();

  const handleAcceptAll = () => {
    setConsent({ analytics: true, maps: true });
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    setConsent({ analytics: false, maps: false });
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
            <h3>Çerez Politikası</h3>
            <p>
              Size daha iyi bir deneyim sunabilmek için çerezleri kullanıyoruz.
              Bu çerezler konum bilgisi ve site analizi için kullanılmaktadır.
            </p>
            <div className="cookie-buttons">
              <button onClick={handleAcceptAll} className="accept-button">
                Tümünü Kabul Et
              </button>
              <button onClick={handleRejectAll} className="reject-button">
                Reddet
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
