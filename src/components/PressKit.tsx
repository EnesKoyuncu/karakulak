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
import { useLanguage } from "@/hooks/useLanguage";
import {
  translations,
  ITranslationsLanguageSupport,
  IPressKitItem,
  pressKitItems,
} from "@/data/pressKitData";

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
  const { language } = useLanguage();

  // Çeviri sözlüğü: SEO, başlık, arayüz ve aria-label metinlerini içerir.
  // TODO: Bu translation ne amk bunu düzeltmem gerek doğru gözükmüyor.

  const texts = translations[language as keyof ITranslationsLanguageSupport];

  return (
    <>
      <SEO
        title={texts.seo.title}
        description={texts.seo.description}
        keywords={texts.seo.keywords}
        image="/press-kit/ayalka-logo.png"
      />

      <main className="press-kit" role="main" aria-label={texts.mainAriaLabel}>
        <motion.header
          className="header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>{texts.headerTitle}</h1>
          <div className="title-underline" aria-hidden="true"></div>
        </motion.header>

        <section className="press-kit-grid" aria-label={texts.gridAriaLabel}>
          {pressKitItems.map((item) => (
            <Tilt key={item.id} options={defaultTiltOptions}>
              <motion.article
                className="press-kit-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <figure className="preview-container">
                  <img
                    src={item.preview}
                    alt={`${
                      item.title[language as keyof IPressKitItem["title"]]
                    } ${language === "tr" ? "Önizleme" : "Preview"}`}
                  />
                  <figcaption className="overlay">
                    <motion.a
                      href={item.fileUrl}
                      download
                      className="download-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={texts.downloadAriaLabel(
                        item.title[language as keyof IPressKitItem["title"]]
                      )}
                    >
                      <FaDownload aria-hidden="true" />
                      <span>{texts.downloadLabel}</span>
                    </motion.a>
                  </figcaption>
                </figure>
                <div className="item-info">
                  <h3>
                    {item.title[language as keyof IPressKitItem["title"]]}
                  </h3>
                  <p>
                    {
                      item.description[
                        language as keyof IPressKitItem["description"]
                      ]
                    }
                  </p>
                  <div
                    className="file-type"
                    aria-label={texts.fileTypeAriaLabel(item.type)}
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
          aria-label={texts.socialMediaAriaLabel}
        >
          <div className="company-brand" role="banner">
            <motion.img
              src="https://ayalka.com.tr/wp-content/uploads/2019/02/cropped-ayalkaufak.png"
              alt="Karakulak Kurumsal Logo"
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
                  <h3>{texts.instagram.title}</h3>
                </header>
                <p>{texts.instagram.description}</p>
                <div
                  className="instagram-preview"
                  aria-label={texts.instagram.previewAriaLabel}
                >
                  <div className="instagram-grid">
                    <div
                      className="insta-img"
                      style={{
                        backgroundImage: "url(/images/social/insta1.jpg)",
                      }}
                      role="img"
                      aria-label={
                        language === "tr"
                          ? "Instagram Paylaşım Önizleme 1"
                          : "Instagram Preview 1"
                      }
                    ></div>
                    <div
                      className="insta-img"
                      style={{
                        backgroundImage: "url(/images/social/insta2.jpg)",
                      }}
                      role="img"
                      aria-label={
                        language === "tr"
                          ? "Instagram Paylaşım Önizleme 2"
                          : "Instagram Preview 2"
                      }
                    ></div>
                    <div
                      className="insta-img"
                      style={{
                        backgroundImage: "url(/images/social/insta3.jpg)",
                      }}
                      role="img"
                      aria-label={
                        language === "tr"
                          ? "Instagram Paylaşım Önizleme 3"
                          : "Instagram Preview 3"
                      }
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
                  aria-label={texts.instagram.followLabel}
                >
                  {texts.instagram.followLabel}
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
                  <h3>{texts.facebook.title}</h3>
                </header>
                <p>{texts.facebook.description}</p>
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
                  aria-label={texts.facebook.likeLabel}
                >
                  {texts.facebook.likeLabel}
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
                  <h3>{texts.linkedin.title}</h3>
                </header>
                <p>{texts.linkedin.description}</p>
                <div className="linkedin-preview">
                  <div
                    className="linkedin-banner"
                    style={{
                      backgroundImage:
                        "url(/images/social/linkedin-banner.jpg)",
                    }}
                  ></div>
                  <div className="linkedin-stats">
                    <span>
                      {language === "tr" ? "Kurumsal Sayfa" : "Corporate Page"}
                    </span>
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
                  aria-label={texts.linkedin.connectLabel}
                >
                  {texts.linkedin.connectLabel}
                </motion.a>
              </div>
            </motion.article>
          </div>
        </section>
      </main>
    </>
  );
}
