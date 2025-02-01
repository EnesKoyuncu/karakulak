import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaShieldAlt, FaComments } from "react-icons/fa";
import "../../styles/miniComponentsStyle/AfterSalesServices.css";

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
    <section className="after-sales">
      <motion.div
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Satış Sonrası</h1>
        <div className="title-underline"></div>
      </motion.div>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="service-card" variants={itemVariants}>
          <div className="icon-wrapper">
            <FaTools className="service-icon" />
          </div>
          <h2>SERVİS HİZMETLERİ</h2>
          <p>
            Ayalka, müşteri memnuniyetini kaliteden ödün vermeden karşılamayı
            satış sonrası servis ile müşteriye huzur vermeyi kalite politikası
            olarak benimsemiştir. Firmamız bünyesinde servis bölümü olarak
            kurulu olan yurt içine ve yurt dışına servis hizmeti veren tam
            donanımlı uzman kadromuz; sorunları çözebilmek için müşterilerimizin
            hizmetindedir.
          </p>
        </motion.div>

        <motion.div className="service-card" variants={itemVariants}>
          <div className="icon-wrapper">
            <FaShieldAlt className="service-icon" />
          </div>
          <h2>GARANTİ</h2>
          <p>
            Ürettiğimiz ürünler kullanım ve kullanıcı hataları hariç, imalat ve
            montaj hatalarına karşı bir yıl süre ile garantilidir.
          </p>
          <div className="guarantee-note">
            <strong>Yedek parça desteği:</strong> Ayalka üretimini yaptığı her
            ürün için yedek parça temin desteğini müşterilerimize taahhüt
            etmektedir.
          </div>
        </motion.div>

        <motion.div className="service-card" variants={itemVariants}>
          <div className="icon-wrapper">
            <FaComments className="service-icon" />
          </div>
          <h2>MÜŞTERİ ŞİKAYET VE ÖNERİLERİ</h2>
          <p>
            Ürünlerimizi müşterilerimizin ihtiyaçları ve beklentilerine göre
            geliştirmek için; şikayet ve önerilerinizi hassasiyetle
            değerlendirmekte sürekli iyileştirme faaliyetlerimizde istatiksel
            veri olarak kullanmaktayız.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
