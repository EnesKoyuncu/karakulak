import { motion } from "framer-motion";
import "../../styles/miniComponentsStyle/MapLocationShowcase.css";
import { useLanguage } from "@/hooks/useLanguage";

export default function MapLocationShowcase() {
  const { language } = useLanguage();

  return (
    <section className="map-location-section">
      <div className="map-location-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {" "}
            {language === "tr"
              ? "KARAKULAK İLETİŞİM"
              : "KARAKULAK CONTACT"}{" "}
          </h2>
          <div className="info-divider"></div>

          <div className="contact-details">
            <h3> {language === "tr" ? "MERKEZ OFİS" : "CENTRAL OFFICE"} </h3>
            <p className="address">
              {language === "tr"
                ? "O.S.B. Mh.8 Sk.No:6 Kemalpaşa / İzmir"
                : "OSB Neighborhood 8, Street No. 6, Kemalpaşa, İzmir, Turkey"}
            </p>

            <div className="contact-item">
              <span className="label">E-mail:</span>
              <a href="mailto:info@ayalka.com.tr" className="value">
                info@ayalka.com.tr
              </a>
            </div>

            <div className="contact-item">
              <span className="label">
                {language === "tr" ? "Tel:" : "Phone:"}
              </span>
              <a href="tel:905326830891" className="value">
                90 532 683 0891
              </a>
            </div>

            <div className="contact-item">
              <span className="label">
                {language === "tr" ? "Faks:" : "Fax:"}
              </span>
              <span className="value">90 533 329 963</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="map-container"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.8876871840584!2d27.417751576192293!3d38.42451897258198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI1JzI4LjMiTiAyN8KwMjUnMTEuOCJF!5e0!3m2!1str!2str!4v1709821844315!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
