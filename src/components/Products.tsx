import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Products.css";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Çöp Kamyonu - Hidrolik Sıkıştırmalı Çöp Kasası",
    category: "Atık Yönetimi",
    image: "/images/products/cop-kamyonu.jpg",
    description: "Yüksek kapasiteli hidrolik sıkıştırma sistemi",
  },
  {
    id: 2,
    name: "Mini Pack",
    category: "Atık Yönetimi",
    image: "/images/products/mini-pack.jpg",
    description: "Kompakt boyutlu atık toplama çözümü",
  },
  {
    id: 3,
    name: "Su Tankeri",
    category: "Su Sistemleri",
    image: "/images/products/su-tankeri.jpg",
    description: "Yüksek kapasiteli su taşıma ve püskürtme sistemi",
  },
  {
    id: 4,
    name: "Vidanjör",
    category: "Su Sistemleri",
    image: "/images/products/vidanjor.jpg",
    description: "Profesyonel atık su ve kanalizasyon temizleme aracı",
  },
  {
    id: 5,
    name: "Hooklift",
    category: "Yükleme Sistemleri",
    image: "/images/products/hooklift.jpg",
    description: "Çok amaçlı kanca yükleme sistemi",
  },
  {
    id: 6,
    name: "Skip Loader | Hidrolift",
    category: "Yükleme Sistemleri",
    image: "/images/products/skip-loader.jpg",
    description: "Konteyner taşıma ve boşaltma sistemi",
  },
  {
    id: 7,
    name: "Teleskopik Platform",
    category: "Platform Sistemleri",
    image: "/images/products/teleskopik-platform.jpg",
    description: "Yüksek erişimli çalışma platformu",
  },
  {
    id: 8,
    name: "Kanal Açma",
    category: "Su Sistemleri",
    image: "/images/products/kanal-acma.jpg",
    description: "Profesyonel kanal temizleme sistemi",
  },
  {
    id: 9,
    name: "Yol Süpürme",
    category: "Tümü",
    image: "/images/products/yol-supurme.jpg",
    description: "Profesyonel yol süpürme sistemi",
  },
  {
    id: 10,
    name: "İtfaiye Damper",
    category: "Tümü",
    image: "/images/products/itfaiye-damper.jpg",
    description: "Profesyonel itfaiye damper sistemi",
  },
  {
    id: 11,
    name: "Monoblok Çöp Kamyonu",
    category: "Tümü",
    image: "/images/products/monoblok-cop-kamyonu.jpg",
    description: "Profesyonel monoblok çöp kamyonu",
  },
  {
    id: 12,
    name: "Konteyner Yıkama",
    category: "Tümü",
    image: "/images/products/konteyner-yikama.jpg",
    description: "Profesyonel konteyner yıkama sistemi",
  },
  {
    id: 13,
    name: "Semi Treyler",
    category: "Tümü",
    image: "/images/products/semi-treyler.jpg",
    description: "Profesyonel semi treyler sistemi",
  },
];

const categories = [
  "Tümü",
  "Atık Yönetimi",
  "Su Sistemleri",
  "Yükleme Sistemleri",
  "Platform Sistemleri",
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProducts =
    selectedCategory === "Tümü"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // İlk 6 ürünü göster, showAll true ise tümünü göster
  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  return (
    <div className="products-section">
      <div className="products-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ürünlerimiz
        </motion.h1>
        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div className="products-grid" layout="position">
        <AnimatePresence mode="wait">
          {displayedProducts.map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <motion.div
                  className="product-overlay"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProduct === product.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <button className="view-details">İncele</button>
                </motion.div>
              </div>
              <div className="product-content">
                <span className="product-category-tag">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length > 6 && (
        <motion.div
          className="show-more-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Daha Az Göster" : "Daha Fazla Göster"}
            <motion.span
              className="arrow-icon"
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </motion.span>
          </button>
        </motion.div>
      )}
    </div>
  );
}
