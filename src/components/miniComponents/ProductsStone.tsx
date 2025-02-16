import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import "../../styles/miniComponentsStyle/ProductsStone.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Share from "yet-another-react-lightbox/plugins/share";
import { useLanguage } from "@/hooks/useLanguage";
import {
  ITranslationsLanguageSupport,
  ProductsProps,
  translations,
} from "@/data/productsStoneData.ts";

// Sadece görsel bölüm için genel container animasyonu (staggered)
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const thumbnailVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const ProductsStone: React.FC<ProductsProps> = ({
  title,
  description,
  images = [],
  additionalInfo,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [startIndex, setStartIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [visibleThumbnails, setVisibleThumbnails] = useState(5);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragThreshold = 50;
  const { language } = useLanguage();

  // Dil bazlı çeviri metinleri

  useEffect(() => {
    if (images && images.length > 0) {
      setSelectedImage(images[0]);
      setStartIndex(0);
      setPhotoIndex(0);
    }

    const updateVisibleThumbnails = () => {
      if (window.innerWidth <= 768) {
        setVisibleThumbnails(3);
      } else {
        setVisibleThumbnails(5);
      }
    };

    updateVisibleThumbnails();
    window.addEventListener("resize", updateVisibleThumbnails);
    return () => {
      window.removeEventListener("resize", updateVisibleThumbnails);
    };
  }, [images]);

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${
          (startIndex - 1) * 120
        }px)`;
      }
    }
  };

  const handleNextClick = () => {
    if (startIndex < images.length - visibleThumbnails) {
      setStartIndex(startIndex + 1);
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${
          (startIndex + 1) * 120
        }px)`;
      }
    }
  };

  // Drag işlemleri: framer-motion ile ana görselde kaydırma hareketlerini kontrol ediyoruz.
  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const dragDistance = info.offset.x;
    const currentIndex = images.indexOf(selectedImage);

    if (Math.abs(dragDistance) > dragThreshold) {
      if (dragDistance > 0 && currentIndex > 0) {
        setSelectedImage(images[currentIndex - 1]);
      } else if (dragDistance < 0 && currentIndex < images.length - 1) {
        setSelectedImage(images[currentIndex + 1]);
      }
    }
    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  };

  const handleImageClick = (index: number) => {
    if (!isDragging) {
      setPhotoIndex(index);
      setIsOpen(true);
    }
  };

  // Klavyeden erişilebilirlik için ana görsele "Enter" veya "Space" tuşuyla tıklama desteği
  const handleMainImageKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      handleImageClick(images.indexOf(selectedImage));
    }
  };

  if (!images || images.length === 0) {
    return (
      <article className="products-container">
        <section
          className="products-info-section"
          aria-label={
            translations[language as keyof ITranslationsLanguageSupport]
              .productInfoSection
          }
        >
          <h2>{title}</h2>
          <p className="description">{description}</p>
          {additionalInfo && (
            <p className="additional-info">{additionalInfo}</p>
          )}
        </section>
      </article>
    );
  }

  return (
    <>
      <article className="products-container">
        {/* Görsel Bölümü: Animasyonlar containerVariants ile sıralı çalışıyor */}
        <motion.section
          className="products-image-section"
          aria-label={
            translations[language as keyof ITranslationsLanguageSupport]
              .productImagesSection
          }
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.figure
            className="main-image-container"
            role="button"
            tabIndex={0}
            aria-label={
              translations[language as keyof ITranslationsLanguageSupport]
                .zoomHint
            }
            onKeyDown={handleMainImageKeyDown}
            onClick={() => handleImageClick(images.indexOf(selectedImage))}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            variants={imageVariants}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt={`${title} - ${
                  translations[language as keyof ITranslationsLanguageSupport]
                    .mainImageAlt
                }`}
                className="main-image"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                draggable={false}
              />
            </AnimatePresence>
            <div className="hint-container" aria-hidden="true">
              <motion.div
                className="zoom-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: isDragging ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <span>
                  {
                    translations[language as keyof ITranslationsLanguageSupport]
                      .zoomHint
                  }
                </span>
              </motion.div>
              <motion.div
                className="swipe-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span>
                  {
                    translations[language as keyof ITranslationsLanguageSupport]
                      .swipeHint
                  }
                </span>
              </motion.div>
            </div>
          </motion.figure>

          <nav
            className="thumbnail-slider-container"
            aria-label={
              translations[language as keyof ITranslationsLanguageSupport]
                .productImagesSection
            }
          >
            {startIndex > 0 && (
              <motion.button
                className="slider-nav-button prev"
                onClick={handlePrevClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={
                  translations[language as keyof ITranslationsLanguageSupport]
                    .prevButton
                }
              >
                <FaChevronLeft />
              </motion.button>
            )}

            <div className="thumbnail-viewport">
              <div
                className="thumbnail-container"
                ref={sliderRef}
                style={{
                  transform: `translateX(-${startIndex * 120}px)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <AnimatePresence>
                  {images.map((image, index) => (
                    <motion.div
                      key={index}
                      className={`thumbnail ${
                        selectedImage === image ? "active" : ""
                      }`}
                      variants={thumbnailVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedImage(image)}
                      layout
                      role="button"
                      tabIndex={0}
                      aria-label={`${title} - ${
                        translations[
                          language as keyof ITranslationsLanguageSupport
                        ].thumbnailAlt
                      } ${index + 1}`}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          setSelectedImage(image);
                        }
                      }}
                    >
                      <img
                        src={image}
                        alt={`${title} - ${
                          translations[
                            language as keyof ITranslationsLanguageSupport
                          ].thumbnailAlt
                        } ${index + 1}`}
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {startIndex < images.length - visibleThumbnails && (
              <motion.button
                className="slider-nav-button next"
                onClick={handleNextClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={
                  translations[language as keyof ITranslationsLanguageSupport]
                    .nextButton
                }
              >
                <FaChevronRight />
              </motion.button>
            )}
          </nav>
        </motion.section>

        {/* Bilgi Bölümü: Görsel animasyonlarından bağımsız, daha hızlı görünüyor */}
        <motion.section
          className="products-info-section"
          aria-label={
            translations[language as keyof ITranslationsLanguageSupport]
              .productInfoSection
          }
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2>{title}</h2>
          <p className="description">{description}</p>
          {additionalInfo && (
            <p className="additional-info">{additionalInfo}</p>
          )}
        </motion.section>
      </article>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={images.map((src) => ({ src }))}
        plugins={[Zoom, Thumbnails, Fullscreen, Share]}
        carousel={{
          finite: true,
          preload: 1,
        }}
        render={{
          buttonPrev: images.length <= 1 ? () => null : undefined,
          buttonNext: images.length <= 1 ? () => null : undefined,
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
    </>
  );
};

export default ProductsStone;
