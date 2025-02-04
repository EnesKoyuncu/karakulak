import { motion } from "framer-motion";
import { FaTools, FaShieldAlt, FaComments } from "react-icons/fa";
import "../../styles/miniComponentsStyle/AfterSalesServices.css";
import { SEO } from "../SEO";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function AfterSalesServices() {
  return (
    <>
      <SEO
        title="Satış Sonrası Hizmetler | Ayalka Makina"
        description="Ayalka Makina satış sonrası servis, garanti ve müşteri hizmetleri. Profesyonel servis ekibimiz ve yedek parça desteğimiz ile yanınızdayız."
        keywords="satış sonrası hizmet, servis hizmeti, garanti, yedek parça, müşteri hizmetleri, teknik destek"
      />

      <main className="after-sales">
        <header className="header">
          <h1>Satış Sonrası Hizmetler</h1>
          <div className="title-underline" role="presentation"></div>
        </header>

        <motion.section
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label="Satış sonrası hizmetlerimiz"
        >
          <motion.article className="service-card" variants={itemVariants}>
            <div className="icon-wrapper" aria-hidden="true">
              <FaTools className="service-icon" />
            </div>
            <h2>SERVİS HİZMETLERİ</h2>
            <p>
              Ayalka, müşteri memnuniyetini kaliteden ödün vermeden karşılamayı
              satış sonrası servis ile müşteriye huzur vermeyi kalite politikası
              olarak benimsemiştir. Firmamız bünyesinde servis bölümü olarak
              kurulu olan yurt içine ve yurt dışına servis hizmeti veren tam
              donanımlı uzman kadromuz; sorunları çözebilmek için
              müşterilerimizin hizmetindedir.
            </p>
          </motion.article>

          <motion.article className="service-card" variants={itemVariants}>
            <div className="icon-wrapper" aria-hidden="true">
              <FaShieldAlt className="service-icon" />
            </div>
            <h2>GARANTİ</h2>
            <p>
              Ürettiğimiz ürünler kullanım ve kullanıcı hataları hariç, imalat
              ve montaj hatalarına karşı bir yıl süre ile garantilidir.
            </p>
            <aside className="guarantee-note">
              <strong>Yedek parça desteği:</strong> Ayalka üretimini yaptığı her
              ürün için yedek parça temin desteğini müşterilerimize taahhüt
              etmektedir.
            </aside>
          </motion.article>

          <motion.article className="service-card" variants={itemVariants}>
            <div className="icon-wrapper" aria-hidden="true">
              <FaComments className="service-icon" />
            </div>
            <h2>MÜŞTERİ ŞİKAYET VE ÖNERİLERİ</h2>
            <p>
              Ürünlerimizi müşterilerimizin ihtiyaçları ve beklentilerine göre
              geliştirmek için; şikayet ve önerilerinizi hassasiyetle
              değerlendirmekte sürekli iyileştirme faaliyetlerimizde istatiksel
              veri olarak kullanmaktayız.
            </p>
          </motion.article>
        </motion.section>
      </main>
    </>
  );
}
