import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useProducts } from "../hooks/useProduct";
import "../styles/Products.css";
import { useLanguage } from "@/hooks/useLanguage";

// ! BU SAYFA DA HAYRA ALAMET DURMUYOR DÜZELTİLMESİ GEREK!!!!
// ! BU SAYFA DA HAYRA ALAMET DURMUYOR DÜZELTİLMESİ GEREK!!!!
// ! BU SAYFA DA HAYRA ALAMET DURMUYOR DÜZELTİLMESİ GEREK!!!!

interface IProduct {
  id: number;
  name: {
    tr: string;
    en: string;
  };
  category: {
    tr: string;
    en: string;
  };
  image: string;
  description: {
    tr: string;
    en: string;
  };
  routeCategory?: string;
}

const products: IProduct[] = [
  {
    id: 1,
    name: {
      tr: "Çöp Kamyonu - Hidrolik Sıkıştırmalı Çöp Kasası",
      en: "Garbage Truck - Hydraulic Compactor",
    },
    category: {
      tr: "Atık Yönetimi",
      en: "Waste Management",
    },
    image: "/images/products/cop-kamyonu.webp",
    description: {
      tr: "Yüksek kapasiteli hidrolik sıkıştırma sistemi",
      en: "High capacity hydraulic compaction system",
    },
    routeCategory: "garbage-truck",
  },
  {
    id: 2,
    name: {
      tr: "Mini Pack",
      en: "Mini Pack",
    },
    category: {
      tr: "Atık Yönetimi",
      en: "Waste Management",
    },
    image: "/images/products/mini-pack.webp",
    description: {
      tr: "Kompakt boyutlu atık toplama çözümü",
      en: "Compact waste collection solution",
    },
    routeCategory: "mini-pack",
  },
  {
    id: 3,
    name: {
      tr: "Su Tankeri",
      en: "Water Tanker",
    },
    category: {
      tr: "Su Sistemleri",
      en: "Water Systems",
    },
    image: "/images/products/su-tankeri.webp",
    description: {
      tr: "Yüksek kapasiteli su taşıma ve püskürtme sistemi",
      en: "High capacity water transport and spraying system",
    },
    routeCategory: "water-tank",
  },
  {
    id: 4,
    name: {
      tr: "Vidanjör",
      en: "Vacuum Truck",
    },
    category: {
      tr: "Su Sistemleri",
      en: "Water Systems",
    },
    image: "/images/products/vidanjor.webp",
    description: {
      tr: "Profesyonel atık su ve kanalizasyon temizleme aracı",
      en: "Professional waste water and sewage cleaning vehicle",
    },
    routeCategory: "vacuum-truck",
  },
  {
    id: 5,
    name: {
      tr: "Hooklift",
      en: "Hooklift",
    },
    category: {
      tr: "Yükleme Sistemleri",
      en: "Loading Systems",
    },
    image: "/images/products/hooklift.webp",
    description: {
      tr: "Çok amaçlı kanca yükleme sistemi",
      en: "Multi-purpose hook loading system",
    },
    routeCategory: "hooklift",
  },
  {
    id: 6,
    name: {
      tr: "Skip Loader | Hidrolift",
      en: "Skip Loader | Hidrolift",
    },
    category: {
      tr: "Yükleme Sistemleri",
      en: "Loading Systems",
    },
    image: "/images/products/skip-loader.webp",
    description: {
      tr: "Konteyner taşıma ve boşaltma sistemi",
      en: "Container transport and unloading system",
    },
    routeCategory: "skip-loader",
  },
  {
    id: 7,
    name: {
      tr: "Teleskopik Platform",
      en: "Telescopic Platform",
    },
    category: {
      tr: "Platform Sistemleri",
      en: "Platform Systems",
    },
    image: "/images/products/teleskopik-platform.webp",
    description: {
      tr: "Yüksek erişimli çalışma platformu",
      en: "High access working platform",
    },
    routeCategory: "telescopic-platform",
  },
  {
    id: 8,
    name: {
      tr: "Kanal Açma",
      en: "Canal Jetting",
    },
    category: {
      tr: "Su Sistemleri",
      en: "Water Systems",
    },
    image: "/images/products/kanal-acma.webp",
    description: {
      tr: "Profesyonel kanal açma ve temizleme aracı",
      en: "Professional canal opening and cleaning vehicle",
    },
    routeCategory: "canal-jetting",
  },
  {
    id: 9,
    name: {
      tr: "Yol Süpürme",
      en: "Road Sweeper",
    },
    category: {
      tr: "Yükleme Sistemleri",
      en: "Loading Systems",
    },
    image: "/images/products/yol-supurme.webp",
    description: {
      tr: "Profesyonel yol süpürme aracı",
      en: "Professional road sweeper vehicle",
    },
    routeCategory: "road-sweeper",
  },
  {
    id: 10,
    name: {
      tr: "İtfaiye",
      en: "Fire Truck",
    },
    category: {
      tr: "Tümü",
      en: "All",
    },
    image: "/images/products/itfaiye.webp",
    description: {
      tr: "Profesyonel itfaiye aracı",
      en: "Professional fire truck",
    },
    routeCategory: "fire-truck",
  },
  {
    id: 11,
    name: {
      tr: "İtfaiye Damper",
      en: "Fire Truck Tipper",
    },
    category: {
      tr: "Tümü",
      en: "All",
    },
    image: "/images/products/itfaiye-damper.webp",
    description: {
      tr: "Profesyonel itfaiye damper sistemi",
      en: "Professional fire truck tipper system",
    },
    routeCategory: "tipper-truck",
  },
  {
    id: 12,
    name: {
      tr: "Monoblok Çöp Kamyonu",
      en: "Monoblock Garbage Truck",
    },
    category: {
      tr: "Tümü",
      en: "All",
    },
    image: "/images/products/monoblok-cop-kamyonu.webp",
    description: {
      tr: "Monoblok çöp kamyonu sistemi",
      en: "Monoblock garbage truck system",
    },
    routeCategory: "monoblock-garbage",
  },
  {
    id: 13,
    name: {
      tr: "Konteyner Yıkama",
      en: "Container Washer",
    },
    category: {
      tr: "Tümü",
      en: "All",
    },
    image: "/images/products/konteyner-yikama.webp",
    description: {
      tr: "Profesyonel konteyner yıkama sistemi",
      en: "Professional container washing system",
    },
    routeCategory: "container-washer",
  },
  {
    id: 14,
    name: {
      tr: "Semi Treyler",
      en: "Semi Trailer",
    },
    category: {
      tr: "Tümü",
      en: "All",
    },
    image: "/images/products/semi-treyler.webp",
    description: {
      tr: "Profesyonel semi treyler sistemleri",
      en: "Professional semi trailer systems",
    },
    routeCategory: "semi-trailer",
  },
];

// ! Just Categories
interface ICategories {
  tr: string[];
  en: string[];
}

const categories: ICategories = {
  tr: [
    "Tümü",
    "Atık Yönetimi",
    "Su Sistemleri",
    "Yükleme Sistemleri",
    "Platform Sistemleri",
  ],
  en: [
    "All",
    "Waste Management",
    "Water Systems",
    "Loading Systems",
    "Platform Systems",
  ],
};

const Products: React.FC = () => {
  const { products: contextProducts } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const location = useLocation();
  const { language } = useLanguage();

  const filteredProducts =
    selectedCategory === (language === "tr" ? "Tümü" : "All")
      ? products
      : products.filter(
          (product) =>
            product.category[language as keyof ICategories] === selectedCategory
        );

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  const findContextProduct = (routeCategory: string) => {
    return contextProducts.find((p) => p.category === routeCategory);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Dil değiştiğinde varsayılan kategori ayarlanır.
    setSelectedCategory(language === "tr" ? "Tümü" : "All");
  }, [language]);

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
          {language === "tr" ? "Ürünlerimiz" : "Our Products"}
        </motion.h1>
        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories[language as keyof ICategories].map((category) => (
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
                      <img
                        src={product.image}
                        alt={product.name[language as keyof IProduct["name"]]}
                      />
                      <motion.div
                        className="product-overlay"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredProduct === product.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="view-details">
                          {language === "tr" ? "İncele" : "View Details"}
                        </span>
                      </motion.div>
                    </div>
                    <div className="product-content">
                      <span className="product-category-tag">
                        {
                          product.category[
                            language as keyof IProduct["category"]
                          ]
                        }
                      </span>
                      <h3>
                        {product.name[language as keyof IProduct["name"]]}
                      </h3>
                      <p>
                        {
                          product.description[
                            language as keyof IProduct["description"]
                          ]
                        }
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div>
                    <div className="product-image">
                      <img
                        src={product.image}
                        alt={product.name[language as keyof IProduct["name"]]}
                      />
                    </div>
                    <div className="product-content">
                      <span className="product-category-tag">
                        {
                          product.category[
                            language as keyof IProduct["category"]
                          ]
                        }
                      </span>
                      <h3>
                        {product.name[language as keyof IProduct["name"]]}
                      </h3>
                      <p>
                        {
                          product.description[
                            language as keyof IProduct["description"]
                          ]
                        }
                      </p>
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
            {showAll
              ? language === "tr"
                ? "Daha Az Göster"
                : "Show Less"
              : language === "tr"
              ? "Daha Fazla Göster"
              : "Show More"}
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
