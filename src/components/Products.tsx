import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import "../styles/Products.css";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  routeCategory?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Çöp Kamyonu - Hidrolik Sıkıştırmalı Çöp Kasası",
    category: "Atık Yönetimi",
    image: "/images/products/cop-kamyonu.jpg",
    description: "Yüksek kapasiteli hidrolik sıkıştırma sistemi",
    routeCategory: "garbage-truck",
  },
  {
    id: 2,
    name: "Mini Pack",
    category: "Atık Yönetimi",
    image: "/images/products/mini-pack.jpg",
    description: "Kompakt boyutlu atık toplama çözümü",
    routeCategory: "mini-pack",
  },
  {
    id: 3,
    name: "Su Tankeri",
    category: "Su Sistemleri",
    image: "/images/products/su-tankeri.jpg",
    description: "Yüksek kapasiteli su taşıma ve püskürtme sistemi",
    routeCategory: "water-tank",
  },
  {
    id: 4,
    name: "Vidanjör",
    category: "Su Sistemleri",
    image: "/images/products/vidanjor.jpg",
    description: "Profesyonel atık su ve kanalizasyon temizleme aracı",
    routeCategory: "vacuum-truck",
  },
  {
    id: 5,
    name: "Hooklift",
    category: "Yükleme Sistemleri",
    image: "/images/products/hooklift.jpg",
    description: "Çok amaçlı kanca yükleme sistemi",
    routeCategory: "hooklift",
  },
  {
    id: 6,
    name: "Skip Loader | Hidrolift",
    category: "Yükleme Sistemleri",
    image: "/images/products/skip-loader.jpg",
    description: "Konteyner taşıma ve boşaltma sistemi",
    routeCategory: "skip-loader",
  },
  {
    id: 7,
    name: "Teleskopik Platform",
    category: "Platform Sistemleri",
    image: "/images/products/teleskopik-platform.jpg",
    description: "Yüksek erişimli çalışma platformu",
    routeCategory: "telescopic-platform",
  },
  {
    id: 8,
    name: "Kanal Açma",
    category: "Su Sistemleri",
    image: "/images/products/kanal-acma.jpg",
    description: "Profesyonel kanal temizleme sistemi",
    routeCategory: "canal-jetting",
  },
  {
    id: 9,
    name: "Yol Süpürme",
    category: "Tümü",
    image: "/images/products/yol-supurme.jpg",
    description: "Profesyonel yol süpürme sistemi",
    routeCategory: "road-sweeper",
  },
  {
    id: 10,
    name: "İtfaiye",
    category: "Tümü",
    image: "/images/products/itfaiye.jpg",
    description: "Profesyonel itfaiye aracı",
    routeCategory: "fire-truck",
  },
  {
    id: 11,
    name: "İtfaiye Damper",
    category: "Tümü",
    image: "/images/products/itfaiye-damper.jpg",
    description: "Profesyonel itfaiye damper sistemi",
    routeCategory: "tipper-truck",
  },
  {
    id: 12,
    name: "Monoblok Çöp Kamyonu",
    category: "Tümü",
    image: "/images/products/monoblok-cop-kamyonu.jpg",
    description: "Profesyonel monoblok çöp kamyonu",
    routeCategory: "monoblock-garbage",
  },
  {
    id: 13,
    name: "Konteyner Yıkama",
    category: "Tümü",
    image: "/images/products/konteyner-yikama.jpg",
    description: "Profesyonel konteyner yıkama sistemi",
    routeCategory: "container-washer",
  },
  {
    id: 14,
    name: "Semi Treyler",
    category: "Tümü",
    image: "/images/products/semi-treyler.jpg",
    description: "Profesyonel semi treyler sistemi",
    routeCategory: "semi-trailer",
  },
];

const categories = [
  "Tümü",
  "Atık Yönetimi",
  "Su Sistemleri",
  "Yükleme Sistemleri",
  "Platform Sistemleri",
];

const Products: React.FC = () => {
  const { products: contextProducts } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const location = useLocation();

  const filteredProducts =
    selectedCategory === "Tümü"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  const findContextProduct = (routeCategory: string) => {
    return contextProducts.find((p) => p.category === routeCategory);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleProductClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="products-section">
      <motion.div className="products-header">
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
      </motion.div>

      <div className="products-grid">
        <AnimatePresence mode="sync">
          {displayedProducts.map((product) => {
            const contextProduct = product.routeCategory
              ? findContextProduct(product.routeCategory)
              : null;

            return (
              <motion.div
                key={product.id}
                className="product-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
              >
                {contextProduct ? (
                  <Link
                    to={`/products/${contextProduct.category}/${contextProduct.id}`}
                    className="product-link"
                    onClick={handleProductClick}
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
                        <span className="view-details">İncele</span>
                      </motion.div>
                    </div>
                    <div className="product-content">
                      <span className="product-category-tag">
                        {product.category}
                      </span>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                    </div>
                  </Link>
                ) : (
                  <div>
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-content">
                      <span className="product-category-tag">
                        {product.category}
                      </span>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

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
    </section>
  );
};

export default Products;
