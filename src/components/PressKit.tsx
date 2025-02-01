import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import {
  FaDownload,
  FaImage,
  FaFilePdf,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import "../styles/PressKit.css";

interface PressKitItem {
  id: number;
  title: string;
  description: string;
  fileUrl: string;
  type: "png" | "pdf";
  preview: string;
}

const pressKitItems: PressKitItem[] = [
  {
    id: 1,
    title: "LOGO",
    description: "Ayalka kurumsal logosu (PNG)",
    fileUrl: "/press-kit/ayalka-logo.png",
    type: "png",
    preview:
      "https://ayalka.com.tr/wp-content/uploads/2019/02/cropped-ayalkaufak.png",
  },
  {
    id: 2,
    title: "LOGO SADE",
    description: "Ayalka sade logo versiyonu (PNG)",
    fileUrl: "/press-kit/ayalka-logo-simple.png",
    type: "png",
    preview:
      "https://ayalka.com.tr/wp-content/uploads/2019/02/cropped-ayalkaufak.png",
  },
  {
    id: 3,
    title: "LOGO PDF",
    description: "Ayalka vektörel logo (PDF)",
    fileUrl: "/press-kit/ayalka-logo-vector.pdf",
    type: "pdf",
    preview:
      "https://ayalka.com.tr/wp-content/uploads/2019/02/cropped-ayalkaufak.png",
  },
];

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const cardVariants = {
  initial: {
    scale: 1,
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  },
  hover: (platform: string) => ({
    scale: 1.02,
    y: -5,
    boxShadow:
      platform === "instagram"
        ? "0px 10px 30px rgba(228, 64, 95, 0.3), 0px 0px 60px rgba(228, 64, 95, 0.1)"
        : platform === "facebook"
        ? "0px 10px 30px rgba(24, 119, 242, 0.3), 0px 0px 60px rgba(24, 119, 242, 0.1)"
        : "0px 10px 30px rgba(0, 119, 181, 0.3), 0px 0px 60px rgba(0, 119, 181, 0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};

export default function PressKit() {
  return (
    <section className="press-kit">
      <motion.div
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>BASIN KİTİ</h1>
        <div className="title-underline"></div>
      </motion.div>

      <div className="press-kit-grid">
        {pressKitItems.map((item) => (
          <Tilt key={item.id} options={defaultTiltOptions}>
            <motion.div
              className="press-kit-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="preview-container">
                <img src={item.preview} alt={item.title} />
                <div className="overlay">
                  <motion.a
                    href={item.fileUrl}
                    download
                    className="download-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload />
                    <span>İNDİR</span>
                  </motion.a>
                </div>
              </div>
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="file-type">
                  {item.type === "png" ? <FaImage /> : <FaFilePdf />}
                  <span>{item.type.toUpperCase()}</span>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      <motion.div
        className="social-media-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="company-brand">
          <motion.img
            src="https://ayalka.com.tr/wp-content/uploads/2019/02/cropped-ayalkaufak.png"
            alt="Ayalka Logo"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="social-platforms">
          <motion.div
            className="platform instagram-card"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            custom="instagram"
            animate={{
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
          >
            <div className="platform-content">
              <div className="platform-header">
                <FaInstagram className="platform-icon" />
                <h3>Instagram</h3>
              </div>
              <p>Araçlarımızın görsellerini takip edebilirsiniz</p>
              <div className="instagram-preview">
                <div className="instagram-grid">
                  {/* Instagram grid görüntüsü için küçük resimler */}
                  <div
                    className="insta-img"
                    style={{
                      backgroundImage: "url(/images/social/insta1.jpg)",
                    }}
                  ></div>
                  <div
                    className="insta-img"
                    style={{
                      backgroundImage: "url(/images/social/insta2.jpg)",
                    }}
                  ></div>
                  <div
                    className="insta-img"
                    style={{
                      backgroundImage: "url(/images/social/insta3.jpg)",
                    }}
                  ></div>
                </div>
              </div>
              <motion.a
                href="https://www.instagram.com/garbagetruckturkey/"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link instagram-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Takip Et
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="platform facebook-card"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            custom="facebook"
            animate={{
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
          >
            <div className="platform-content">
              <div className="platform-header">
                <FaFacebookF className="platform-icon" />
                <h3>Facebook</h3>
              </div>
              <p>En son haberler ve güncellemeler için</p>
              <div className="facebook-preview">
                <div
                  className="fb-cover"
                  style={{
                    backgroundImage: "url(/images/social/fb-cover.jpg)",
                  }}
                ></div>
                <div className="fb-stats">
                  <span>5K+ Takipçi</span>
                  <span>4.8 ★</span>
                </div>
              </div>
              <motion.a
                href="https://www.facebook.com/ayalka.com.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link facebook-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sayfamızı Beğen
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="platform linkedin-card"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            custom="linkedin"
            animate={{
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
          >
            <div className="platform-content">
              <div className="platform-header">
                <FaLinkedinIn className="platform-icon" />
                <h3>LinkedIn</h3>
              </div>
              <p>Kurumsal haberler ve iş fırsatları</p>
              <div className="linkedin-preview">
                <div
                  className="linkedin-banner"
                  style={{
                    backgroundImage: "url(/images/social/linkedin-banner.jpg)",
                  }}
                ></div>
                <div className="linkedin-stats">
                  <span>Kurumsal Sayfa</span>
                  <span>500+ Takipçi</span>
                </div>
              </div>
              <motion.a
                href="https://www.linkedin.com/in/garbage-truck-ayalka-52a080177/?originalSubdomain=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link linkedin-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Bağlantı Kur
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
