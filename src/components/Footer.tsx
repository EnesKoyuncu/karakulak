import { motion } from "framer-motion";
import "../styles/Footer.css";
import { useLanguage } from "@/hooks/useLanguage";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-pattern"></div>

      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-section company-info">
            <h3>KARAKULAK</h3>
            <p>
              {" "}
              {language === "tr"
                ? "Araç Üstü Ekipman San.Tic. Ltd. Şti."
                : "Vehicle Mounted Equipment Industry & Trade Ltd."}{" "}
            </p>
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
                ? "Tel: +90 532 683 0891"
                : "Phone: +90 532 683 0891 "}{" "}
            </p>
            <p>Email: info@ayalka.com.tr</p>
          </div>

          <div className="footer-section social">
            <h4> {language === "tr" ? "Sosyal Medya" : "Social Media"} </h4>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
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
              ? "Karakulak Araç Üstü Ekipman San.Tic. Ltd. Tüm Hakları Saklıdır"
              : "Karakulak Vehicle Mounted Equipment Industry & Trade Ltd. All Rights Reserved"}
          </div>
          <div className="developer">
            {language === "tr" ? "Tasarım ve Yazılım:" : "Design & Software"}{" "}
            <a
              href="https://github.com/eneskoyuncu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enes Koyuncu
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
