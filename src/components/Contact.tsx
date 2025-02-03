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
    <animated.div ref={ref} style={springProps} className="contact-card">
      <div className="card-icon">
        <Icon />
      </div>
      <h3>{title}</h3>
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
              <ItemIcon />
              <span>{item.text}</span>
            </a>
          );
        })}
      </div>
    </animated.div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <Parallax
        blur={0}
        bgImage="https://images.pexels.com/photos/2760344/pexels-photo-2760344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        bgImageAlt="background"
        strength={100}
        className="hero-section"
      >
        <div className="hero-overlay" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            İLETİŞİM
          </motion.h1>
        </motion.div>
      </Parallax>

      <div className="contact-container">
        {/* İletişim Bilgileri Bölümü */}
        <section className="contact-section">
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
        <section className="map-section">
          <div className="map-content">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.989089252454!2d32.85659631570713!3d40.20991977939201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDEyJzM1LjciTiAzMsKwNTEnMjMuOCJF!5e0!3m2!1str!2str!4v1625136234567!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="address-info">
              <h2>MERKEZ OFİS</h2>
              <p className="address">
                <FaMapMarkerAlt />
                İskele Köyü Ankara Caddesi No: 99/1 Çankırı/Merkez
              </p>
              <div className="office-contacts">
                <a href="tel:+905326830891" className="contact-item">
                  <FaPhone />
                  +90 532 683 0891
                </a>
                <a href="tel:+905342740325" className="contact-item">
                  <FaPhone />
                  +90 534 274 0325
                </a>
                <a href="tel:+905301499993" className="contact-item">
                  <FaPhone />
                  +90 530 149 9993
                </a>
                <a href="tel:+905333329963" className="contact-item">
                  <FaPhone />
                  +90 533 332 9963
                </a>
                <a href="mailto:info@ayalka.com.tr" className="contact-item">
                  <FaEnvelope />
                  info@ayalka.com.tr
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
