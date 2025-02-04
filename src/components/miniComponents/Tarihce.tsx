import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/miniComponentsStyle/Tarihce.css";
import { useLocation } from "react-router-dom";
import { SEO } from "../SEO";

const Tarihce: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <SEO
        title="Tarihçe | Ayalka Makina"
        description="1998'den günümüze Ayalka Makina'nın kuruluş ve gelişim hikayesi. ISO9001:2000 ve CE kalite standartlarında üretim yapan modern tesisimiz ve kalite anlayışımız hakkında bilgi edinin."
        keywords="ayalka tarihçe, ayalka kuruluş, ayalka makina tarihi, ayalka üretim tesisi, ayalka kalite standartları, kemalpaşa organize sanayi"
        image="/images/facility/ayalka-tesis.jpg"
      />

      <article className="tarihce-section" aria-labelledby="tarihce-baslik">
        <div className="tarihce-container">
          <motion.header
            className="tarihce-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="tarihce-baslik">TARİHÇE</h1>
            <div className="title-underline" aria-hidden="true"></div>
          </motion.header>

          <div className="tarihce-content">
            <motion.section
              className="content-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <section
                className="history-section"
                aria-label="Kuruluş Hikayemiz"
              >
                <p className="main-text">
                  Şirketimiz, 1998 yılında belediye ve özel sektör kuruluşlarına
                  yönelik araç üstü ekipman üretimi amacıyla kurulmuştur.
                </p>
              </section>

              <section
                className="facility-section"
                aria-labelledby="tesis-baslik"
              >
                <h2 id="tesis-baslik">Üretim Tesisimiz</h2>
                <p>
                  Yenmiş Fabrika Yolu Küme evler No:31 Kemalpaşa Organize Sanayi
                  Bölgesi'ndeki modern tesisimizde, ISO9001:2000 ve CE kalite
                  standartlarında, alanında uzman personeliyle üretim
                  yapmaktayız.
                </p>
              </section>

              <section
                className="quality-section"
                aria-labelledby="kalite-baslik"
              >
                <h2 id="kalite-baslik">Kalite Anlayışımız</h2>
                <p>
                  Belediyelerimiz ve değerli halkımızın hizmetinde, güvenilir,
                  çevre dostu ve üstün hizmet anlayışına dayalı faaliyet
                  göstermekteyiz. Ürünlerimiz, hizmet kalitesini yükseltmek
                  amacıyla özenle tasarlanmaktadır.
                </p>
              </section>

              <section
                className="customer-section"
                aria-label="Müşteri Odaklı Yaklaşımımız"
              >
                <p>
                  AYALKA olarak, müşterilerimize en kaliteli ürünleri, en uygun
                  ödeme koşullarıyla sunmaktayız. Bizimle çalışan değerli
                  müşterilerimiz, uygun fiyatlar ve üstün hizmet anlayışıyla her
                  alanda AYALKA ayrıcalıklarını yaşamaktadır.
                </p>
              </section>
            </motion.section>
          </div>
        </div>
      </article>
    </>
  );
};

export default Tarihce;
