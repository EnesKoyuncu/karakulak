import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Gallery.css";
import { useImagePreload } from "../utils/performance";
import { SEO } from "../components/SEO";
import { useProducts } from "../hooks/useProduct";
import { useLanguage } from "@/hooks/useLanguage";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

interface GalleryImage {
  src: string;
  category: string;
  alt: { tr: string; en: string };
  loaded: boolean;
}

const Gallery: React.FC = () => {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  // Çeviri sözlüğü: SEO, başlık, kategori filtreleri, overlay metni ve aria-label’lar
  const translations = {
    tr: {
      seo: {
        title: "Galeri | Ayalka Makina",
        description:
          "Ayalka Makina ürün galerisi. Çöp kasaları, su tankerleri ve diğer araç üstü ekipmanlarımızın fotoğraflarını inceleyin.",
        keywords:
          "ayalka galeri, ürün görselleri, çöp kasası görselleri, su tankeri görselleri",
      },
      mainAriaLabel: "Ürün Galerisi",
      headerTitle: "Galeri",
      categoryFilterAriaLabel: "Galeri Kategorileri",
      allCategory: "Tümü",
      enlargeText: "Büyütmek için tıklayın",
    },
    en: {
      seo: {
        title: "Gallery | Ayalka Makina",
        description:
          "Ayalka Makina product gallery. Browse photos of garbage compactor bodies, water tankers, and other equipment.",
        keywords:
          "ayalka gallery, product images, garbage compactor images, water tanker images",
      },
      mainAriaLabel: "Product Gallery",
      headerTitle: "Gallery",
      categoryFilterAriaLabel: "Gallery Categories",
      allCategory: "All",
      enlargeText: "Click to enlarge",
    },
  };

  const texts = translations[language];

  // Tüm resimleri hesapla
  const allImages: GalleryImage[] = useMemo(() => {
    return products.flatMap((product) =>
      product.images.map((image) => ({
        src: image.url,
        category: product.category,
        alt: image.alt,
        loaded: false,
      }))
    );
  }, [products]);

  // Seçili kategoriye göre filtrele
  const filteredImages = useMemo(() => {
    return selectedCategory === "all"
      ? allImages
      : allImages.filter((image) => image.category === selectedCategory);
  }, [allImages, selectedCategory]);

  // Kategorileri hesapla
  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((product) => product.category))];
  }, [products]);

  // İlk 6 resmi önbelleğe al
  useImagePreload(allImages.slice(0, 6).map((img) => img.src));

  // Ürünler yüklendiğinde loading durumunu güncelle
  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

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
        title={texts.seo.title}
        description={texts.seo.description}
        keywords={texts.seo.keywords}
        image="/press-kit/ayalka-logo.png"
      />

      <section className="gallery-container" aria-label={texts.mainAriaLabel}>
        <motion.header
          className="gallery-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="gallery-title">{texts.headerTitle}</h1>
          <div className="title-underline" aria-hidden="true"></div>
        </motion.header>

        <motion.nav
          className="category-filter"
          aria-label={texts.categoryFilterAriaLabel}
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
              {category === "all"
                ? texts.allCategory
                : category.replace(/-/g, " ")}
            </button>
          ))}
        </motion.nav>

        <motion.div className="gallery-grid" layout initial={false}>
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
                  alt={image.alt[language]}
                  loading={index < 6 ? "eager" : "lazy"}
                  width="300"
                  height="169"
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.opacity = "1";
                  }}
                />
                <div className="image-overlay">
                  <span>{texts.enlargeText}</span>
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
              alt: img.alt[language],
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
