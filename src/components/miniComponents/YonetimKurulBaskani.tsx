import React from "react";
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

            <div className="message-content">
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
            </div>

            <div className="signature-block">
              <span className="name">KERİM KARAKULAK</span>
              <span className="title">Yönetim Kurulu Başkanı</span>
            </div>
          </div>

          <motion.div
            className="yonetim-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="/images/yonetim/baskan.jpg"
              alt="Yönetim Kurulu Başkanı"
            />
            <div className="image-pattern"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
