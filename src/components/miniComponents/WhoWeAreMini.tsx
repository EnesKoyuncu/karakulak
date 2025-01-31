import React from "react";
import { motion } from "framer-motion";
import { FlickeringGrid } from "../ui/FlickeringGrid";
import "../../styles/miniComponentsStyle/WhoWeAreMini.css";

export default function WhoWeAreMini() {
  return (
    <section className="whoweare-section">
      {/* Background Grid */}
      <div className="background-grid">
        <FlickeringGrid
          squareSize={10}
          gridGap={14}
          color="#e74c3c"
          maxOpacity={0.2}
          flickerChance={0.2}
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="whoweare-content">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Biz Kimiz?</h2>
          <div className="title-line"></div>
        </motion.div>

        <div className="whoweare-grid">
          <motion.div
            className="text-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Şirketimiz 1998 yılında belediye ve özel sektör kuruluşlarına,
              araç üzeri itfaye arazörü, malzemeleri, su tankerleri, hidrolik
              sıkıştırmalı çöp kasaları, vidanjör için üst ekipman üretmek ve
              siz değerli kuruluşlarımızı hizmetini sunmak amacıyla kurulmuştur.
            </p>
          </motion.div>

          <motion.div
            className="stats-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat-box">
              <span className="stat-number">25+</span>
              <span className="stat-label">Yıllık Deneyim</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">50+</span>
              <span className="stat-label">İhracat Ülkesi</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Mutlu Müşteri</span>
            </div>
          </motion.div>
        </div>

        <motion.button
          className="more-info-btn"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tarihçe
        </motion.button>
      </div>
    </section>
  );
}
