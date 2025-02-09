import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/miniComponentsStyle/Tarihce.css";
import { useLocation } from "react-router-dom";
import { SEO } from "../SEO";
import { useLanguage } from "@/hooks/useLanguage";
const History: React.FC = () => {
  const location = useLocation();
  const { language } = useLanguage();
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
            <h1 id="tarihce-baslik">
              {" "}
              {language === "tr" ? "TARİHÇE" : "History of Karakulak"}{" "}
            </h1>
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
                  {language === "tr"
                    ? `Şirketimiz, 1998 yılında belediye ve özel sektör kuruluşlarına
                  yönelik araç üstü ekipman üretimi amacıyla kurulmuştur.`
                    : `Our company was established in 1998 to produce upper equipment for municipalities and private sector organizations.`}
                </p>
              </section>

              <section
                className="facility-section"
                aria-labelledby="tesis-baslik"
              >
                <h2 id="tesis-baslik">
                  {" "}
                  {language === "tr"
                    ? "Üretim Tesisimiz"
                    : "Our Production Facility"}{" "}
                </h2>
                <p>
                  {language === "tr"
                    ? `Yenmiş Fabrika Yolu Küme evler No:31 Kemalpaşa Organize Sanayi
                  Bölgesi'ndeki modern tesisimizde, ISO9001:2000 ve CE kalite
                  standartlarında, alanında uzman personeliyle üretim
                  yapmaktayız.`
                    : `In our modern facility located at Yenmiş Factory Road Cluster Houses No: 31 Kemalpaşa Organized Industrial Zone, we produce with expert personnel in ISO9001:2000 and CE quality standards.`}
                </p>
              </section>

              <section
                className="quality-section"
                aria-labelledby="kalite-baslik"
              >
                <h2 id="kalite-baslik">
                  {" "}
                  {language === "tr"
                    ? "Kalite Anlayışımız"
                    : "Our Understanding of Quality"}{" "}
                </h2>
                <p>
                  {language === "tr"
                    ? `Belediyelerimiz ve değerli halkımızın hizmetinde, güvenilir,
                  çevre dostu ve üstün hizmet anlayışına dayalı faaliyet
                  göstermekteyiz. Ürünlerimiz, hizmet kalitesini yükseltmek
                  amacıyla özenle tasarlanmaktadır.`
                    : `We operate based on a reliable, environmentally friendly, and superior service understanding in the service of our municipalities and valuable people. Our products are carefully designed to improve service quality.`}
                </p>
              </section>

              <section
                className="customer-section"
                aria-label="Müşteri Odaklı Yaklaşımımız"
              >
                <p>
                  {language === "tr"
                    ? `AYALKA olarak, müşterilerimize en kaliteli ürünleri, en uygun
                  ödeme koşullarıyla sunmaktayız. Bizimle çalışan değerli
                  müşterilerimiz, uygun fiyatlar ve üstün hizmet anlayışıyla her
                  alanda AYALKA ayrıcalıklarını yaşamaktadır.`
                    : `As AYALKA, we offer our customers the highest quality products with the most suitable payment terms. Our valuable customers working with us experience AYALKA privileges in every field with affordable prices and superior service understanding.`}
                </p>
              </section>
            </motion.section>
          </div>
        </div>
      </article>
    </>
  );
};

export default History;
