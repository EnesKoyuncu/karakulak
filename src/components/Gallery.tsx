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
    <div className="gallery-container">
      <motion.h1
        className="gallery-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Galeri
      </motion.h1>

      <motion.div
        className="category-filter"
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
          >
            {category === "all" ? "Tümü" : category.replace(/-/g, " ")}
          </button>
        ))}
      </motion.div>

      <motion.div className="gallery-grid" layout>
        <AnimatePresence mode="wait">
          {filteredImages.map((image, index) => (
            <motion.div
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
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="image-overlay">
                <span>Büyütmek için tıklayın</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={currentImageIndex}
        slides={filteredImages.map((img) => ({ src: img.src }))}
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
    </div>
  );
};

export default Gallery;
