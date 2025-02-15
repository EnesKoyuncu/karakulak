import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";
import { SEO } from "./SEO";
import { useCookieConsent } from "../hooks/useCookieConsent";
import { useLanguage } from "@/hooks/useLanguage";

interface ContactInfoProps {
  title: string;
  byWho?: string;
  info: {
    href: string;
    icon: React.ComponentType;
    text: string;
    target?: string;
  }[];
}

interface ITranslation {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    bgAlt: string;
    title: string;
  };
  contactInfo: {
    generalManager: string;
    exportManager: string;
    generalManagerAssistant: string;
    accounting: string;
    generalManagerInfo: {
      href: string;
      icon: React.ComponentType;
      text: string;
    }[];
    exportManagerInfo: {
      href: string;
      icon: React.ComponentType;
      text: string;
    }[];
    generalManagerAssistantInfo: {
      href: string;
      icon: React.ComponentType;
      text: string;
    }[];
    accountingInfo: {
      href: string;
      icon: React.ComponentType;
      text: string;
    }[];
  };
  map: {
    officeTitle: string;
    address: string;
    contactItems: {
      phone1: string;
      phone2: string;
      phone3: string;
      phone4: string;
      email: string;
    };
    consentMessage: string;
    consentButton: string;
  };
  mainAriaLabel: string;
}

interface ITranslationLanguageSupport {
  tr: ITranslation;
  en: ITranslation;
}

const translations: ITranslationLanguageSupport = {
  tr: {
    seo: {
      title: "İletişim | Ayalka Makina",
      description:
        "Ayalka Makina ile iletişime geçin. Adres: İzmir Kemalpaşa OSB, Telefon: +90-532-683-0891. Araç üstü ekipman üretimi hakkında bilgi almak için bize ulaşın.",
      keywords:
        "ayalka iletişim, ayalka makina iletişim, ayalka telefon, ayalka adres, ayalka makina konum",
    },
    hero: {
      bgAlt: "İletişim sayfası arka plan görseli",
      title: "İLETİŞİM",
    },
    contactInfo: {
      generalManager: "GENEL MÜDÜR",
      exportManager: "İHRACAT MÜDÜRÜ",
      generalManagerAssistant: "GENEL MÜDÜR YARDIMCISI",
      accounting: "MUHASEBE",
      generalManagerInfo: [
        {
          href: "mailto:info@ayalka.com.tr",
          icon: FaEnvelope,
          text: "info@ayalka.com.tr",
        },
        {
          href: "tel:+905333329963",
          icon: FaPhone,
          text: "+90 533 332 9963",
        },
      ],
      exportManagerInfo: [
        {
          href: "mailto:ihracat@ayalka.com.tr",
          icon: FaEnvelope,
          text: "ihracat@ayalka.com.tr",
        },
        {
          href: "mailto:export@ayalka.com.tr",
          icon: FaEnvelope,
          text: "export@ayalka.com.tr",
        },
        {
          href: "tel:+905326830891",
          icon: FaPhone,
          text: "+90 532 683 0891",
        },
      ],
      generalManagerAssistantInfo: [
        {
          href: "mailto:info@ayalka.com.tr",
          icon: FaEnvelope,
          text: "info@ayalka.com.tr",
        },
        {
          href: "tel:+905524399257",
          icon: FaPhone,
          text: "+90 552 439 9257",
        },
      ],
      accountingInfo: [
        {
          href: "mailto:ihracat@ayalka.com.tr",
          icon: FaEnvelope,
          text: "ihracat@ayalka.com.tr",
        },
      ],
    },
    map: {
      officeTitle: "MERKEZ OFİS",
      address: "İskele Köyü Ankara Caddesi No: 99/1 Çankırı/Merkez",
      contactItems: {
        phone1: "+90 532 683 0891",
        phone2: "+90 534 274 0325",
        phone3: "+90 530 149 9993",
        phone4: "+90 533 332 9963",
        email: "info@ayalka.com.tr",
      },
      consentMessage:
        "Konumumuzu görmek için çerez politikamızı kabul etmeniz gerekmektedir.",
      consentButton: "Çerezleri Kabul Et",
    },
    mainAriaLabel: "İletişim Bilgileri",
  },
  en: {
    seo: {
      title: "Contact | Ayalka Makina",
      description:
        "Get in touch with Ayalka Makina. Address: İzmir Kemalpaşa OSB, Phone: +90-532-683-0891. Contact us for information on our equipment manufacturing.",
      keywords:
        "ayalka contact, ayalka makina contact, ayalka phone, ayalka address, ayalka makina location",
    },
    hero: {
      bgAlt: "Contact page background image",
      title: "CONTACT",
    },
    contactInfo: {
      generalManager: "GENERAL MANAGER",
      exportManager: "EXPORT MANAGER",
      generalManagerAssistant: "GENERAL MANAGER ASSISTANT",
      accounting: "ACCOUNTING",
      generalManagerInfo: [
        {
          href: "mailto:info@ayalka.com.tr",
          icon: FaEnvelope,
          text: "info@ayalka.com.tr",
        },
        {
          href: "tel:+905333329963",
          icon: FaPhone,
          text: "+90 533 332 9963",
        },
      ],
      exportManagerInfo: [
        {
          href: "mailto:ihracat@ayalka.com.tr",
          icon: FaEnvelope,
          text: "ihracat@ayalka.com.tr",
        },
        {
          href: "mailto:export@ayalka.com.tr",
          icon: FaEnvelope,
          text: "export@ayalka.com.tr",
        },
        {
          href: "tel:+905326830891",
          icon: FaPhone,
          text: "+90 532 683 0891",
        },
      ],
      generalManagerAssistantInfo: [
        {
          href: "mailto:info@ayalka.com.tr",
          icon: FaEnvelope,
          text: "info@ayalka.com.tr",
        },
        {
          href: "tel:+905524399257",
          icon: FaPhone,
          text: "+90 552 439 9257",
        },
      ],
      accountingInfo: [
        {
          href: "mailto:l.molva@ayalka.com.tr",
          icon: FaEnvelope,
          text: "l.molva@ayalka.com.tr",
        },
      ],
    },
    map: {
      officeTitle: "HEAD OFFICE",
      address: "İskele Köyü Ankara Caddesi No: 99/1 Çankırı/Merkez",
      contactItems: {
        phone1: "+90 532 683 0891",
        phone2: "+90 534 274 0325",
        phone3: "+90 530 149 9993",
        phone4: "+90 533 332 9963",
        email: "info@ayalka.com.tr",
      },
      consentMessage: "You must accept our cookie policy to view our location.",
      consentButton: "Accept Cookies",
    },
    mainAriaLabel: "Contact Information",
  },
};

const ContactInfo: React.FC<ContactInfoProps> = ({ title, byWho, info }) => {
  return (
    <article
      className="contact-card"
      role="group"
      aria-labelledby={`contact-${title}`}
    >
      <h3 id={`contact-${title}`}>{title}</h3>
      <div className="by-who" aria-hidden="true">
        {byWho}
      </div>

      <div className="contact-details">
        {info.map((item, index) => {
          const ItemIcon = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              className="contact-link"
              target={item.target}
              rel={item.target ? "noopener noreferrer" : undefined}
              aria-label={item.text}
            >
              <ItemIcon aria-hidden="true" />
              <span>{item.text}</span>
            </a>
          );
        })}
      </div>
    </article>
  );
};

const Contact: React.FC = () => {
  const { consent, setConsent } = useCookieConsent();
  const { language } = useLanguage();

  const texts = translations[language as keyof ITranslationLanguageSupport];

  return (
    <main className="contact-page" role="main" aria-label={texts.mainAriaLabel}>
      <SEO
        title={texts.seo.title}
        description={texts.seo.description}
        keywords={texts.seo.keywords}
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
              byWho="Tuçe Kır"
              info={texts.contactInfo.exportManagerInfo}
            />
            <ContactInfo
              title={texts.contactInfo.generalManagerAssistant}
              byWho="Cemal Kır"
              info={texts.contactInfo.generalManagerAssistantInfo}
            />
            <ContactInfo
              title={texts.contactInfo.accounting}
              // byWho= "bilerek boş bırakıldı"
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
                >
                  <FaPhone aria-hidden="true" />
                  <span>{texts.map.contactItems.phone1}</span>
                </a>
                <a
                  href={`tel:${texts.map.contactItems.phone2}`}
                  className="contact-item"
                >
                  <FaPhone aria-hidden="true" />
                  <span>{texts.map.contactItems.phone2}</span>
                </a>
                <a
                  href={`tel:${texts.map.contactItems.phone3}`}
                  className="contact-item"
                >
                  <FaPhone aria-hidden="true" />
                  <span>{texts.map.contactItems.phone3}</span>
                </a>
                <a
                  href={`tel:${texts.map.contactItems.phone4}`}
                  className="contact-item"
                >
                  <FaPhone aria-hidden="true" />
                  <span>{texts.map.contactItems.phone4}</span>
                </a>
                <a
                  href={`mailto:${texts.map.contactItems.email}`}
                  className="contact-item"
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
