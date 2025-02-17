import { motion } from "framer-motion";
import "../../styles/miniComponentsStyle/MapLocationShowcase.css";
import { useLanguage } from "@/hooks/useLanguage";
import { mapLocationTexts } from "@/data/mapLocationShowcaseData";

export default function MapLocationShowcase() {
  const { language } = useLanguage();
  const texts = mapLocationTexts;

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
            {texts.sectionTitle[language as keyof typeof texts.sectionTitle]}
          </h2>
          <div className="info-divider"></div>

          <div className="contact-details">
            <h3>
              {
                texts.contactHeadings.centralOffice[
                  language as keyof typeof texts.contactHeadings.centralOffice
                ]
              }
            </h3>
            <p className="address">
              {texts.address[language as keyof typeof texts.address]}
            </p>

            <div className="contact-item">
              <span className="label">{texts.labels.email}</span>
              <a
                href={`mailto:${texts.contactDetails.email}`}
                className="value"
                aria-label={
                  language === "tr"
                    ? "İletişim Mailimize Mesaj Gönder"
                    : "Send Mail to Contact Mail"
                }
                title={
                  language === "tr"
                    ? "İletişim Mailimize Mesaj Gönder"
                    : "Send Mail to Contact Mail"
                }
              >
                {texts.contactDetails.email}
              </a>
            </div>

            <div className="contact-item">
              <span className="label">
                {
                  texts.labels.phone[
                    language as keyof typeof texts.labels.phone
                  ]
                }
              </span>
              <a
                href={`tel:${texts.contactDetails.phoneNumber}`}
                className="value"
                aria-label={
                  language === "tr"
                    ? "İletişim Telefon Numaramızı Ara"
                    : "Call Our Contact Phone Number"
                }
                title={
                  language === "tr"
                    ? "İletişim Telefon Numaramızı Ara"
                    : "Call Our Contact Phone Number"
                }
              >
                {texts.contactDetails.phoneNumber}
              </a>
            </div>

            <div className="contact-item">
              <span className="label">
                {texts.labels.fax[language as keyof typeof texts.labels.fax]}
              </span>
              <span className="value">{texts.contactDetails.faxNumber}</span>
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
            aria-label={
              language === "tr"
                ? "Karakulak Harita Konumu"
                : "Karakulak Map Location"
            }
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
