import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useProducts } from "../hooks/useProduct";
import "../styles/Products.css";
import { useLanguage } from "@/hooks/useLanguage";
import {
  IProduct,
  products,
  ICategories,
  categories,
} from "@/data/productsData";

import { TranslatedText } from "@/context/ProductContext";

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
    return contextProducts.find(
      (p) => p.category[language as keyof TranslatedText] === routeCategory
    );
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
    console.log("Product clicked");
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
                aria-label={language === "tr" ? "Ürün Kartı" : "Product Card"}
              >
                {contextProduct ? (
                  <Link
                    to={`products/${contextProduct.id}/${contextProduct.id}`}
                    className="product-link"
                    onClick={handleProductClick}
                    aria-label={
                      language === "tr"
                        ? "Ürünün Sayfasına Git"
                        : "Go to Product Page"
                    }
                  >
                    <div
                      className="product-image"
                      aria-label={
                        language === "tr"
                          ? `${product.name.tr} Resmi`
                          : `${product.name.en} Image`
                      }
                    >
                      <img
                        src={product.image}
                        alt={product.name[language as keyof IProduct["name"]]}
                        title={product.name[language as keyof IProduct["name"]]}
                        aria-label={
                          product.name[language as keyof IProduct["name"]]
                        }
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
                    <div
                      className="product-content"
                      aria-label={
                        language === "tr"
                          ? `${product.name.tr} Ürün Bilgileri`
                          : `${product.name.en} Product Information`
                      }
                    >
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
                        alt={
                          language === "tr"
                            ? `${product.name.tr} Resmi`
                            : `${product.name.en} Image`
                        }
                        aria-label={
                          language === "tr"
                            ? `${product.name.tr} Resmi`
                            : `${product.name.en} Image`
                        }
                        title={
                          language === "tr"
                            ? `${product.name.tr} Resmi`
                            : `${product.name.en} Image`
                        }
                      />
                    </div>
                    <div
                      className="product-content"
                      aria-label={
                        language === "tr"
                          ? `${product.name.tr} Ürün Yazılı Bilgileri`
                          : `${product.name.en} Product Text Information`
                      }
                    >
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
            aria-label={
              showAll
                ? language === "tr"
                  ? "Daha Az Göster"
                  : "Show Less"
                : language === "tr"
                ? "Daha Fazla Göster"
                : "Show More"
            }
            title={
              language === "tr"
                ? "Daha Fazla veya Az Göster Butonu"
                : "Show More or Less Switch Button"
            }
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
