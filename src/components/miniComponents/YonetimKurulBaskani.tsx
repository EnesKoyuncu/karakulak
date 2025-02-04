import { motion } from "framer-motion";
import "../../styles/miniComponentsStyle/YonetimKurulBaskani.css";

export default function YonetimKurulBaskani() {
  return (
    <section className="yonetim-section">
      <div className="yonetim-container">
        <motion.div
          className="yonetim-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="yonetim-text">
            <h1>YÖNETİM KURULU BAŞKANI</h1>
            <div className="title-underline"></div>

            <motion.div
              className="message-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Firmamız ve çalışanlarımız "her noktada kalite" anlayışını,
                "SÜREKLİ İŞ GELİŞTİRME MODELİ" sistemi ve "TOPLAM KALİTE
                YÖNETİMİ"ni ilke olarak benimsemiş, KURUMSALLAŞMAYA BÜYÜK ÖNEM
                vererek alanında uzman kişiler aracılığı ile müşteri
                memnuniyetini kalite odaklı olarak sağlamayı hedeflemiştir.
              </p>
              <p>
                Üretim aşamalarının her evresinde insan sağlığını ve değerini,
                müşteri memnuniyetinden ve Ayalka kalitesinden ödün vermeden
                gözetmekteyiz. Bu nedenle yurtdışı ve yurtiçi memnun edilmiş
                müşterilerimizin güvenlerini kazanmanın haklı gururunu
                yaşıyoruz.
              </p>
            </motion.div>

            <motion.div
              className="signature-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="name">KERİM KARAKULAK</span>
              <span className="title">Yönetim Kurulu Başkanı</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
