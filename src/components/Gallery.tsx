import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProducts } from "../context/ProductContext";
import "../styles/Gallery.css";
import { useImagePreload } from "../utils/performance";
import { SEO } from "../components/SEO";

// Lightbox ve stil importları
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

const Gallery: React.FC = () => {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Tüm resimleri useMemo ile hesapla
  const allImages = useMemo(() => {
    return products.flatMap((product) =>
      product.images.map((image) => ({
        src: image.url,
        category: product.category,
        alt: image.alt,
        loaded: false,
      }))
    );
  }, [products]);

  // Filtrelenmiş resimleri useMemo ile hesapla
  const filteredImages = useMemo(() => {
    return selectedCategory === "all"
      ? allImages
      : allImages.filter((image) => image.category === selectedCategory);
  }, [allImages, selectedCategory]);

  // Kategorileri useMemo ile hesapla
  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((product) => product.category))];
  }, [products]);

  // İlk 6 resmi önbelleğe al
  useImagePreload(allImages.slice(0, 6).map((img) => img.src));

  // Sayfa ilk yüklendiğinde
  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  // Kategori değiştirme - artık daha performanslı
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // Resim tıklama
  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  if (loading) {
    return (
      <div className="gallery-loading">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Galeri | Ayalka Makina"
        description="Ayalka Makina ürün galerisi. Çöp kasaları, su tankerleri ve diğer araç üstü ekipmanlarımızın fotoğraflarını inceleyin."
        keywords="ayalka galeri, ürün görselleri, çöp kasası görselleri, su tankeri görselleri"
      />

      <section className="gallery-container" aria-label="Ürün Galerisi">
        <motion.header
          className="gallery-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="gallery-title">Galeri</h1>
        </motion.header>

        <motion.nav
          className="category-filter"
          aria-label="Galeri Kategorileri"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
              aria-pressed={selectedCategory === category}
            >
              {category === "all" ? "Tümü" : category.replace(/-/g, " ")}
            </button>
          ))}
        </motion.nav>

        <motion.div
          className="gallery-grid"
          layout
          initial={false} // İlk yüklemede animasyon olmasın
        >
          <AnimatePresence mode="wait" initial={false}>
            {filteredImages.map((image, index) => (
              <motion.article
                key={image.src}
                className="gallery-item"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.2 },
                  layout: { duration: 0.3 },
                }}
                onClick={() => handleImageClick(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index < 6 ? "eager" : "lazy"}
                  width="300"
                  height="169"
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.opacity = "1";
                  }}
                />
                <div className="image-overlay">
                  <span>Büyütmek için tıklayın</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={currentImageIndex}
            slides={filteredImages.map((img) => ({
              src: img.src,
              alt: img.alt,
            }))}
            plugins={[Zoom, Thumbnails, Fullscreen]}
            carousel={{
              finite: true,
              preload: 1,
            }}
            zoom={{
              maxZoomPixelRatio: 3,
              zoomInMultiplier: 2,
            }}
            thumbnails={{
              position: "bottom",
              width: 120,
              height: 80,
              gap: 16,
            }}
          />
        )}
      </section>
    </>
  );
};

export default Gallery;
