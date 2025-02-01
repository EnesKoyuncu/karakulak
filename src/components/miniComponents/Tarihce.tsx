import React from "react";
import { motion } from "framer-motion";
import "../../styles/miniComponentsStyle/Tarihce.css";

export default function Tarihce() {
  return (
    <section className="tarihce-section">
      <div className="tarihce-container">
        <motion.div
          className="tarihce-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1>TARİHÇE</h1>
          <div className="title-underline"></div>
        </motion.div>

        <div className="tarihce-content">
          <motion.div
            className="content-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="history-section">
              <p className="main-text">
                Şirketimiz, 1998 yılında belediye ve özel sektör kuruluşlarına
                yönelik araç üstü ekipman üretimi amacıyla kurulmuştur.
              </p>
            </div>

            <div className="facility-section">
              <h3>Üretim Tesisimiz</h3>
              <p>
                Yenmiş Fabrika Yolu Küme evler No:31 Kemalpaşa Organize Sanayi
                Bölgesi'ndeki modern tesisimizde, ISO9001:2000 ve CE kalite
                standartlarında, alanında uzman personeliyle üretim yapmaktayız.
              </p>
            </div>

            <div className="quality-section">
              <h3>Kalite Anlayışımız</h3>
              <p>
                Belediyelerimiz ve değerli halkımızın hizmetinde, güvenilir,
                çevre dostu ve üstün hizmet anlayışına dayalı faaliyet
                göstermekteyiz. Ürünlerimiz, hizmet kalitesini yükseltmek
                amacıyla özenle tasarlanmaktadır.
              </p>
            </div>

            <div className="customer-section">
              <p>
                AYALKA olarak, müşterilerimize en kaliteli ürünleri, en uygun
                ödeme koşullarıyla sunmaktayız. Bizimle çalışan değerli
                müşterilerimiz, uygun fiyatlar ve üstün hizmet anlayışıyla her
                alanda AYALKA ayrıcalıklarını yaşamaktadır.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
