import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";
import SEO from "@/components/SEO";
import { useCookieConsent } from "../hooks/useCookieConsent";
import { useLanguage } from "@/hooks/useLanguage";
import { ITranslationLanguageSupport, translations } from "@/data/contactData"; // Yeni importlar

import { ContactInfo } from "./miniComponents/ContactSubComps/ContactInfo";

const Contact: React.FC = () => {
  const { consent, setConsent } = useCookieConsent();
  const { language } = useLanguage();

  const texts = translations[language as keyof ITranslationLanguageSupport];

  return (
    <main className="contact-page" role="main" aria-label={texts.mainAriaLabel}>
      <SEO
        title={texts.seo.title}
        description={texts.seo.description}
        image="https://karakulakgroup.com/images/karakulakgroupLogo.webp" // TODO : değiştirilcek logo geldiğinde
        author="Karakulak Group"
        publisher="Karakulak Group"
        keywords={[texts.seo.keywords]}
        ogType="website"
      />

      <header className="hero-section">
        <Parallax
          blur={0}
          bgImage="https://images.pexels.com/photos/2760344/pexels-photo-2760344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          bgImageAlt={texts.hero.bgAlt}
          strength={300}
          style={{
            maxHeight: "50vh",
          }}
          bgImageStyle={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "auto",
            width: "100%",
            aspectRatio: "16/9",
          }}
          className="hero-section"
        >
          <div className="hero-overlay" role="presentation" />
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="hero-title">{texts.hero.title}</h1>
          </motion.div>
        </Parallax>
      </header>

      <section className="contact-container">
        <section className="contact-section" aria-label={texts.mainAriaLabel}>
          <div className="contact-cards">
            <ContactInfo
              title={texts.contactInfo.generalManager}
              byWho="Hamza Karakulak"
              info={texts.contactInfo.generalManagerInfo}
            />
            <ContactInfo
              title={texts.contactInfo.exportManager}
              byWho="Gizem Karakulak"
              info={texts.contactInfo.exportManagerInfo}
            />
            <ContactInfo
              title={texts.contactInfo.generalManagerAssistant}
              byWho="Cemal Kır"
              info={texts.contactInfo.generalManagerAssistantInfo}
            />
            <ContactInfo
              title={texts.contactInfo.accounting}
              info={texts.contactInfo.accountingInfo}
            />
          </div>
        </section>

        <section
          className="map-section"
          aria-label={
            language === "tr"
              ? "Konum ve İletişim Detayları"
              : "Location and Contact Details"
          }
        >
          <div className="map-content">
            <figure className="map-container">
              {consent.functional ? (
                <iframe
                  title={
                    language === "tr"
                      ? "Ayalka Makina Konum Haritası"
                      : "Ayalka Makina Location Map"
                  }
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.8106391253986!2d27.339486776491437!3d38.43510997257307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b962058436e8f1%3A0x6e731f5a4891c0e2!2sAyalka%20Makina!5e0!3m2!1str!2str!4v1693840561520!5m2!1str!2str"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <div className="maps-consent">
                  <p>{texts.map.consentMessage}</p>
                  <button
                    onClick={() => {
                      const newConsent = { ...consent, functional: true };
                      setConsent(newConsent);
                    }}
                    className="consent-button"
                  >
                    {texts.map.consentButton}
                  </button>
                </div>
              )}
            </figure>

            <div className="address-info">
              <h2>{texts.map.officeTitle}</h2>
              <address className="address">
                <FaMapMarkerAlt aria-hidden="true" />
                <span>{texts.map.address}</span>
              </address>

              <div className="office-contacts">
                <a
                  href={`tel:${texts.map.contactItems.phone1}`}
                  className="contact-item"
                  aria-label={
                    language === "tr"
                      ? "Ofis Telefon Numaramızı Ara"
                      : "Call Our Office Phone Number"
                  }
                  title={
                    language === "tr"
                      ? "Ofis Telefon Numaramızı Ara"
                      : "Call Our Office Phone Number"
                  }
                >
                  <FaPhone aria-hidden="true" />
                  <span>{texts.map.contactItems.phone1}</span>
                </a>
                <a
                  href={`tel:${texts.map.contactItems.phone2}`}
                  className="contact-item"
                  aria-label={
                    language === "tr"
                      ? "Ofis Telefon Numaramızı Ara"
                      : "Call Our Office Phone Number"
                  }
                  title={
                    language === "tr"
                      ? "Ofis Telefon Numaramızı Ara"
                      : "Call Our Office Phone Number"
                  }
                >
                  <FaPhone aria-hidden="true" />
                  <span>{texts.map.contactItems.phone2}</span>
                </a>
                <a
                  href={`tel:${texts.map.contactItems.phone3}`}
                  className="contact-item"
                  aria-label={
                    language === "tr"
                      ? "Ofis Telefon Numaramızı Ara"
                      : "Call Our Office Phone Number"
                  }
                  title={
                    language === "tr"
                      ? "Ofis Telefon Numaramızı Ara"
                      : "Call Our Office Phone Number"
                  }
                >
                  <FaPhone aria-hidden="true" />
                  <span>{texts.map.contactItems.phone3}</span>
                </a>
                <a
                  href={`tel:${texts.map.contactItems.phone4}`}
                  className="contact-item"
                  aria-label={
                    language === "tr"
                      ? "Ofis Telefon Numaramızı Ara"
                      : "Call Our Office Phone Number"
                  }
                  title={
                    language === "tr"
                      ? "Ofis Telefon Numaramızı Ara"
                      : "Call Our Office Phone Number"
                  }
                >
                  <FaPhone aria-hidden="true" />
                  <span>{texts.map.contactItems.phone4}</span>
                </a>
                <a
                  href={`mailto:${texts.map.contactItems.email}`}
                  className="contact-item"
                  aria-label={
                    language === "tr"
                      ? "İletişim Mailize Mail Gönder"
                      : "Send Mail to Our Contact Mail"
                  }
                  title={
                    language === "tr"
                      ? "İletişim Mailize Mail Gönder"
                      : "Send Mail to Our Contact Mail"
                  }
                >
                  <FaEnvelope aria-hidden="true" />
                  <span>{texts.map.contactItems.email}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Contact;
