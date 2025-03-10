import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Gallery.css";
import { useImagePreload } from "../utils/performance";
import SEO from "../components/SEO";
import { useProducts } from "../hooks/useProduct";
import { useLanguage } from "@/hooks/useLanguage";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import {
  GalleryImage,
  translations,
  ITranslationsLanguageSupport,
} from "@/data/galleryData";
import { TranslatedText } from "@/context/ProductContext";

const Gallery: React.FC = () => {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage() as { language: keyof TranslatedText };

  const texts = translations[language as keyof ITranslationsLanguageSupport];

  // Tüm resimleri hesapla
  const allImages: GalleryImage[] = useMemo(() => {
    return products.flatMap((product) =>
      product.images.map((image) => ({
        src: image.url,
        category: product.category[language as keyof TranslatedText],
        alt: image.alt,
        loaded: false,
      }))
    );
  }, [products, language]);

  // Seçili kategoriye göre filtrele
  const filteredImages = useMemo(() => {
    return selectedCategory === "all"
      ? allImages
      : allImages.filter((image) => image.category === selectedCategory);
  }, [allImages, selectedCategory]);

  // Kategorileri hesapla
  const categories = useMemo(() => {
    return [
      "all",
      ...new Set(products.map((product) => product.category as TranslatedText)),
    ];
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
        title={
          translations[language as keyof ITranslationsLanguageSupport].seo.title
        }
        description={
          translations[language as keyof ITranslationsLanguageSupport].seo
            .description
        }
        image="https://karakulakgroup.com/images/karakulakgroupLogo.webp" // TODO : değiştirilcek logo geldiğinde
        author="Karakulak Group"
        publisher="Karakulak Group"
        keywords={
          translations[language as keyof ITranslationsLanguageSupport].seo
            .keywords
        }
        ogType="website"
      />

      <section className="gallery-container" aria-label={texts.mainAriaLabel}>
        <motion.header
          className="gallery-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="gallery-title">{texts.headerTitle}</h1>
          <h2 className="visually-hidden">Karakulak Group</h2>
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
              key={typeof category === "string" ? category : category[language]}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() =>
                handleCategoryChange(
                  typeof category === "string" ? category : category[language]
                )
              }
              aria-pressed={selectedCategory === category}
              aria-label={
                language === "tr"
                  ? `Kategori: ${
                      typeof category === "string"
                        ? category
                        : category[language]
                    }`
                  : `Category: ${
                      typeof category === "string"
                        ? category
                        : category[language]
                    }`
              }
              title={
                language === "tr"
                  ? `Kategori: ${
                      typeof category === "string"
                        ? category
                        : category[language]
                    }`
                  : `Category: ${
                      typeof category === "string"
                        ? category
                        : category[language]
                    }`
              }
            >
              {category === "all"
                ? texts.allCategory
                : (typeof category === "string"
                    ? category
                    : category[language]
                  ).replace(/-/g, " ")}
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
                  alt={
                    image.alt[language as keyof ITranslationsLanguageSupport]
                  } //TODO: Aslında bu kullanım yanlış ama geçici olarak kalsın
                  aria-label={
                    image.alt[language as keyof ITranslationsLanguageSupport]
                  }
                  title={
                    image.alt[language as keyof ITranslationsLanguageSupport]
                  }
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
              alt: img.alt[language as keyof ITranslationsLanguageSupport],
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
