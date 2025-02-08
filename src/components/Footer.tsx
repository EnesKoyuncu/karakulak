import { motion } from "framer-motion";
import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-pattern"></div>

      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-section company-info">
            <h3>KARAKULAK</h3>
            <p>Araç Üstü Ekipman San.Tic. Ltd. Şti.</p>
          </div>

          <div className="footer-section contact">
            <h4>İletişim</h4>
            <p>O.S.B. Mh.8 Sk.No:6 Kemalpaşa / İzmir</p>
            <p>Tel: 90 532 683 0891</p>
            <p>Email: info@ayalka.com.tr</p>
          </div>

          <div className="footer-section social">
            <h4>Sosyal Medya</h4>
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
            © 2015 – {currentYear} Karakulak Araç Üstü Ekipman San.Tic. Ltd.
            Şti. Tüm Hakları Saklıdır
          </div>
          <div className="developer">
            Tasarım ve Yazılım:{" "}
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
