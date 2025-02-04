import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProducts } from "../context/ProductContext";
import "../styles/Gallery.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { SEO } from "./SEO";

const Gallery: React.FC = () => {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<
    { src: string; category: string; alt: string }[]
  >([]);
  const [filteredImages, setFilteredImages] = useState<
    { src: string; category: string; alt: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  // Tüm resimleri topla
  useEffect(() => {
    const images = products.flatMap((product) =>
      product.images.map((image) => ({
        src: image.url,
        category: product.category,
        alt: image.alt,
      }))
    );
    setAllImages(images);
    setFilteredImages(images);
    setLoading(false);
  }, [products]);

  // Kategorileri oluştur
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Kategori filtreleme
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setFilteredImages(
      category === "all"
        ? allImages
        : allImages.filter((image) => image.category === category)
    );
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
        title="Ürün Galerisi | Ayalka Makina"
        description="Ayalka Makina'nın geniş ürün yelpazesini keşfedin. Damper, römork, treyler ve diğer araç üstü ekipmanlarımızın yüksek kaliteli fotoğraflarını inceleyin."
        keywords="ayalka galeri, ayalka ürünler, damper galerisi, römork galerisi, treyler galerisi, araç üstü ekipman görselleri, ayalka makina ürünleri"
        image="/images/gallery-og-image.jpg"
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
              aria-label={`${
                category === "all" ? "Tümü" : category.replace(/-/g, " ")
              } kategorisini göster`}
            >
              {category === "all" ? "Tümü" : category.replace(/-/g, " ")}
            </button>
          ))}
        </motion.nav>

        <motion.main
          className="gallery-grid"
          layout
          role="region"
          aria-label="Galeri Görüntüleri"
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.article
                key={image.src}
                className="gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleImageClick(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  width="300"
                  height="169"
                  aria-label={`${image.alt} - Büyütmek için tıklayın`}
                />
                <div className="image-overlay" aria-hidden="true">
                  <span>Büyütmek için tıklayın</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.main>

        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentImageIndex}
          slides={filteredImages.map((img) => ({
            src: img.src,
            alt: img.alt,
            title: img.alt,
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
          a11y={{
            closeLabel: "Galeriden çık",
            nextLabel: "Sonraki resim",
            prevLabel: "Önceki resim",
            zoomInLabel: "Yakınlaştır",
            zoomOutLabel: "Uzaklaştır",
            fullscreenLabel: "Tam ekran",
          }}
        />
      </section>
    </>
  );
};

export default Gallery;
