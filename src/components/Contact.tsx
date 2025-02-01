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
        bgImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
        bgImageAlt="background"
        strength={200}
        className="hero-section"
      >
        <div className="hero-overlay" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>İletişim</h1>
          <div className="title-underline" />
        </motion.div>
      </Parallax>

      <div className="contact-grid">
        <div className="contact-info">
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

        <div className="map-section">
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
            <p>
              <FaMapMarkerAlt />
              İskele Köyü Ankara Caddesi No: 99/1 Çankırı/Merkez
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
