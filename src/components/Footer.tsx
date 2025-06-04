import { motion } from "framer-motion";
import "../styles/Footer.css";
import { useLanguage } from "@/hooks/useLanguage";
import { navItems, MenuItem } from "@/data/navItems";
import { FaAngleRight } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-pattern"></div>

      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-section company-info">
            <h3>KARAKULAK GROUP</h3>
            <p>
              {" "}
              {language === "tr"
                ? "Araç Üstü Ekipman San.Tic. Ltd. Şti."
                : "Vehicle Mounted Equipment Industry & Trade Ltd."}{" "}
            </p>

            <ul className="footer-links">
              {navItems.map((item, index) => {
                if (item.addedFooter) {
                  return (
                    <li className="footer-link" key={index}>
                      <Link
                        to={`/${language}` + (item.link || "#")}
                        className="footer-link-a"
                        aria-label={
                          language === "tr"
                            ? `${item.title.tr} sayfasına git`
                            : `Go to ${item.title.en} page`
                        }
                        title={
                          language === "tr"
                            ? `${item.title.tr} sayfasına git`
                            : `Go to ${item.title.en} page`
                        }
                      >
                        <FaAngleRight className="footer-link-icon" />
                        {item.title[language as keyof MenuItem["title"]]}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          <div className="footer-section contact">
            <h4> {language === "tr" ? "İletişim" : "Contact"} </h4>
            <p>
              {" "}
              {language === "tr"
                ? "O.S.B. Mh.8 Sk.No:6 Kemalpaşa / İzmir"
                : "OSB Neighborhood 8, Street No. 6, Kemalpaşa, İzmir, Turkey"}
            </p>
            <p>
              {" "}
              {language === "tr"
                ? "Tel: +9 0536 842 14 32" //TODO değişecek
                : "Phone: +90 536 842 14 32"}{" "}
            </p>
            <div className="footer-email">
              <a
                href="mailto:info@karakulakgroup.com"
                style={{ textDecoration: "none", color: "white" }}
                aria-label={
                  language === "tr"
                    ? "Karakulak Group İletişim Maili"
                    : "Karakulak Group Contact Mail"
                }
                title={
                  language === "tr"
                    ? "Karakulak Group İletişim Maili"
                    : "Karakulak Group Contact Mail"
                }
              >
                Email: info@karakulakgroup.com.tr
              </a>
            </div>
          </div>

          <div className="footer-section social">
            <h4>{language === "tr" ? "Sosyal Medya" : "Social Media"}</h4>
            <div className="social-links">
              <div className="social-link-item">
                <a
                  href="https://www.facebook.com/ayalka.com.tr/" //TODO değişecek
                  target="_blank"
                  rel="noopener noreferrer"
                  id="facebook-link"
                  aria-label={
                    language === "tr"
                      ? "Karakulak Group Facebook Sayfasına Gİt"
                      : "Go to Karakulak Group Facebook Page"
                  }
                  title={
                    language === "tr"
                      ? "Karakulak Group Facebook Sayfasına Gİt"
                      : "Go to Karakulak Group Facebook Page"
                  }
                >
                  <i className="fab fa-facebook"></i>
                  <span>KarakulakGroup</span>
                </a>
              </div>
              <div className="social-link-item">
                <a
                  href="https://www.instagram.com/garbagetruckturkey/" //TODO değişecek
                  target="_blank"
                  rel="noopener noreferrer"
                  id="instagram-link"
                  aria-label={
                    language === "tr"
                      ? "Karakulak Group İnstagram Sayfasına Gİt"
                      : "Go to Karakulak Group Instagram Page"
                  }
                  title={
                    language === "tr"
                      ? "Karakulak Group İnstagram Sayfasına Gİt"
                      : "Go to Karakulak Group Instagram Page"
                  }
                >
                  <i className="fab fa-instagram"></i>
                  <span>KarakulakGroup</span>
                </a>
              </div>
              <div className="social-link-item">
                <a
                  href="https://www.youtube.com/@garbagetruckturkey5268" //TODO değişecek
                  target="_blank"
                  rel="noopener noreferrer"
                  id="youtube-link"
                  aria-label={
                    language === "tr"
                      ? "Karakulak Group Youtube Sayfasına Gİt"
                      : "Go to Karakulak Group Youtube Page"
                  }
                  title={
                    language === "tr"
                      ? "Karakulak Group Youtube Sayfasına Gİt"
                      : "Go to Karakulak Group Youtube Page"
                  }
                >
                  <i className="fab fa-youtube"></i>
                  <span>KarakulakGroup</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="copyright">
            © 1998 – {currentYear}{" "}
            {language === "tr"
              ? "Karakulak Group Araç Üstü Ekipman San.Tic. Ltd. Tüm Hakları Saklıdır"
              : "Karakulak Group Vehicle Mounted Equipment Industry & Trade Ltd. All Rights Reserved"}
          </div>
          <div className="developer">
            {language === "tr" ? "Tasarım ve Yazılım:" : "Design & Software"}{" "}
            <a
              href="https://github.com/eneskoyuncu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                language === "tr"
                  ? "Enes Ertuğrul Koyuncu Github Sayfası"
                  : "Enes Ertuğrul Koyuncu Github Page"
              }
              title={
                language === "tr"
                  ? "Enes Ertuğrul Koyuncu Github Sayfası"
                  : "Enes Ertuğrul Koyuncu Github Page"
              }
            >
              Enes Ertuğrul Koyuncu
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
