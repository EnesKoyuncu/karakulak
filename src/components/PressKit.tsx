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
import { SEO } from "./SEO";

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
    <>
      <SEO
        title="Basın Kiti | Ayalka Makina"
        description="Ayalka Makina kurumsal kimlik öğeleri, logolar, sosyal medya hesapları ve basın materyalleri. Markamızla ilgili tüm medya kaynaklarına buradan ulaşabilirsiniz."
        keywords="ayalka basın kiti, ayalka logo, ayalka kurumsal kimlik, ayalka sosyal medya, ayalka makina kurumsal"
        image="/press-kit/ayalka-logo.png"
      />

      <main className="press-kit" role="main" aria-label="Basın Kiti İçeriği">
        <motion.header
          className="header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>BASIN KİTİ</h1>
          <div className="title-underline" aria-hidden="true"></div>
        </motion.header>

        <section
          className="press-kit-grid"
          aria-label="Kurumsal Logolar ve İndirilebilir Materyaller"
        >
          {pressKitItems.map((item) => (
            <Tilt key={item.id} options={defaultTiltOptions}>
              <motion.article
                className="press-kit-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <figure className="preview-container">
                  <img src={item.preview} alt={`${item.title} Önizleme`} />
                  <figcaption className="overlay">
                    <motion.a
                      href={item.fileUrl}
                      download
                      className="download-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`${item.title} dosyasını indir`}
                    >
                      <FaDownload aria-hidden="true" />
                      <span>İNDİR</span>
                    </motion.a>
                  </figcaption>
                </figure>
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div
                    className="file-type"
                    aria-label={`Dosya tipi: ${item.type.toUpperCase()}`}
                  >
                    {item.type === "png" ? (
                      <FaImage aria-hidden="true" />
                    ) : (
                      <FaFilePdf aria-hidden="true" />
                    )}
                    <span>{item.type.toUpperCase()}</span>
                  </div>
                </div>
              </motion.article>
            </Tilt>
          ))}
        </section>

        <section
          className="social-media-section"
          aria-label="Sosyal Medya Platformları"
        >
          <div className="company-brand" role="banner">
            <motion.img
              src="https://ayalka.com.tr/wp-content/uploads/2019/02/cropped-ayalkaufak.png"
              alt="Ayalka Kurumsal Logo"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="social-platforms">
            <motion.article
              className="platform instagram-card"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              custom="instagram"
              animate={{
                scale: 1,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div className="platform-content">
                <header className="platform-header">
                  <FaInstagram className="platform-icon" aria-hidden="true" />
                  <h3>Instagram</h3>
                </header>
                <p>Araçlarımızın görsellerini takip edebilirsiniz</p>
                <div
                  className="instagram-preview"
                  aria-label="Instagram Önizleme Görselleri"
                >
                  <div className="instagram-grid">
                    <div
                      className="insta-img"
                      style={{
                        backgroundImage: "url(/images/social/insta1.jpg)",
                      }}
                      role="img"
                      aria-label="Instagram Paylaşım Önizleme 1"
                    ></div>
                    <div
                      className="insta-img"
                      style={{
                        backgroundImage: "url(/images/social/insta2.jpg)",
                      }}
                      role="img"
                      aria-label="Instagram Paylaşım Önizleme 2"
                    ></div>
                    <div
                      className="insta-img"
                      style={{
                        backgroundImage: "url(/images/social/insta3.jpg)",
                      }}
                      role="img"
                      aria-label="Instagram Paylaşım Önizleme 3"
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
                  aria-label="Instagram Sayfamızı Takip Et"
                >
                  Takip Et
                </motion.a>
              </div>
            </motion.article>

            <motion.article
              className="platform facebook-card"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              custom="facebook"
              animate={{
                scale: 1,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div className="platform-content">
                <header className="platform-header">
                  <FaFacebookF className="platform-icon" aria-hidden="true" />
                  <h3>Facebook</h3>
                </header>
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
                  aria-label="Facebook Sayfamızı Beğen"
                >
                  Sayfamızı Beğen
                </motion.a>
              </div>
            </motion.article>

            <motion.article
              className="platform linkedin-card"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              custom="linkedin"
              animate={{
                scale: 1,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <div className="platform-content">
                <header className="platform-header">
                  <FaLinkedinIn className="platform-icon" aria-hidden="true" />
                  <h3>LinkedIn</h3>
                </header>
                <p>Kurumsal haberler ve iş fırsatları</p>
                <div className="linkedin-preview">
                  <div
                    className="linkedin-banner"
                    style={{
                      backgroundImage:
                        "url(/images/social/linkedin-banner.jpg)",
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
                  aria-label="LinkedIn Bağlantı Kur"
                >
                  Bağlantı Kur
                </motion.a>
              </div>
            </motion.article>
          </div>
        </section>
      </main>
    </>
  );
}
