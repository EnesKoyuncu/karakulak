import React from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-parallax";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaBuilding,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import "../styles/Contact.css";
import { SEO } from "./SEO";
import { useCookieConsent } from "../hooks/useCookieConsent";

interface ContactInfoProps {
  title: string;
  icon: React.ComponentType;
  info: {
    href: string;
    icon: React.ComponentType;
    text: string;
    target?: string;
  }[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  title,
  icon: Icon,
  info,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { tension: 100, friction: 20 },
  });

  return (
    <animated.div
      ref={ref}
      style={springProps}
      className="contact-card"
      role="group"
      aria-labelledby={`title-${title}`}
    >
      <div className="card-icon" aria-hidden="true">
        <Icon />
      </div>
      <h3 id={`title-${title}`}>{title}</h3>
      <div className="contact-details">
        {info.map((item, index) => {
          const ItemIcon = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              className="contact-link"
              target={item.target}
            >
              <ItemIcon aria-hidden="true" />
              <span>{item.text}</span>
            </a>
          );
        })}
      </div>
    </animated.div>
  );
};

const Contact: React.FC = () => {
  const { consent, setConsent } = useCookieConsent();

  return (
    <>
      <SEO
        title="İletişim | Ayalka Makina"
        description="Ayalka Makina ile iletişime geçin. Adres: İzmir Kemalpaşa OSB, Telefon: +90-532-683-0891. Araç üstü ekipman üretimi hakkında bilgi almak için bize ulaşın."
        keywords="ayalka iletişim, ayalka makina iletişim, ayalka telefon, ayalka adres, ayalka makina konum"
      />

      <div className="contact-page">
        <Parallax
          blur={0}
          bgImage="https://images.pexels.com/photos/2760344/pexels-photo-2760344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          bgImageAlt="İletişim sayfası arka plan görseli"
          strength={100}
          className="hero-section"
        >
          <div className="hero-overlay" role="presentation" />
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="hero-title">İLETİŞİM</h1>
          </motion.div>
        </Parallax>

        <main className="contact-container">
          {/* İletişim Bilgileri Bölümü */}
          <section className="contact-section" aria-label="İletişim Bilgileri">
            <div className="contact-cards">
              <ContactInfo
                title="GENEL MÜDÜR"
                icon={FaUser}
                info={[
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
                ]}
              />
              <ContactInfo
                title="İHRACAT MÜDÜRÜ"
                icon={FaBuilding}
                info={[
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
                    text: "+90532 683 08 91",
                  },
                ]}
              />
              <ContactInfo
                title="GENEL MÜDÜR YARDIMCISI"
                icon={FaUser}
                info={[
                  {
                    href: "mailto:info@ayalka.com.tr",
                    icon: FaEnvelope,
                    text: "info@ayalka.com.tr",
                  },
                  {
                    href: "tel:+905524399257",
                    icon: FaPhone,
                    text: "+90 552 439 92 57",
                  },
                ]}
              />
              <ContactInfo
                title="MUHASEBE"
                icon={FaFileInvoiceDollar}
                info={[
                  {
                    href: "mailto:l.molva@ayalka.com.tr",
                    icon: FaEnvelope,
                    text: "l.molva@ayalka.com.tr",
                  },
                ]}
              />
            </div>
          </section>

          {/* Harita ve Merkez Ofis Bölümü */}
          <section
            className="map-section"
            aria-label="Konum ve İletişim Detayları"
          >
            <div className="map-content">
              <figure className="map-container">
                {consent.functional ? (
                  <iframe
                    title="Ayalka Makina Konum Haritası"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.8106391253986!2d27.339486776491437!3d38.43510997257307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b962058436e8f1%3A0x6e731f5a4891c0e2!2sAyalka%20Makina!5e0!3m2!1str!2str!4v1693840561520!5m2!1str!2str"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <div className="maps-consent">
                    <p>
                      Konumumuzu görmek için çerez politikamızı kabul etmeniz
                      gerekmektedir.
                    </p>
                    <button
                      onClick={() => {
                        const newConsent = { ...consent, functional: true }; // fonksyionel çerezleri açar
                        setConsent(newConsent);
                      }}
                      className="consent-button"
                    >
                      Çerezleri Kabul Et
                    </button>
                  </div>
                )}
              </figure>

              <div className="address-info">
                <h2>MERKEZ OFİS</h2>
                <address className="address">
                  <FaMapMarkerAlt aria-hidden="true" />
                  <span>
                    İskele Köyü Ankara Caddesi No: 99/1 Çankırı/Merkez
                  </span>
                </address>

                <div className="office-contacts">
                  <a href="tel:+905326830891" className="contact-item">
                    <FaPhone aria-hidden="true" />
                    <span>+90 532 683 0891</span>
                  </a>
                  <a href="tel:+905342740325" className="contact-item">
                    <FaPhone aria-hidden="true" />
                    <span>+90 534 274 0325</span>
                  </a>
                  <a href="tel:+905301499993" className="contact-item">
                    <FaPhone aria-hidden="true" />
                    <span>+90 530 149 9993</span>
                  </a>
                  <a href="tel:+905333329963" className="contact-item">
                    <FaPhone aria-hidden="true" />
                    <span>+90 533 332 9963</span>
                  </a>
                  <a href="mailto:info@ayalka.com.tr" className="contact-item">
                    <FaEnvelope aria-hidden="true" />
                    <span>info@ayalka.com.tr</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Contact;
