import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ITranslationsLanguageSupport } from "@/data/productsStoneData";

interface ThumbnailSliderProps {
  images: string[];
  selectedImage: string;
  setSelectedImage: (image: string) => void;
  startIndex: number;
  setStartIndex: (index: number) => void;
  visibleThumbnails: number;
  translations: ITranslationsLanguageSupport;
  language: string;
  title: string;
}

const ThumbnailSlider: React.FC<ThumbnailSliderProps> = ({
  images,
  selectedImage,
  setSelectedImage,
  startIndex,
  setStartIndex,
  visibleThumbnails,
  translations,
  language,
  title,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

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

  return (
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
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`thumbnail ${selectedImage === image ? "active" : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(image)}
              layout
              role="button"
              tabIndex={0}
              aria-label={`${title} - ${
                translations[language as keyof ITranslationsLanguageSupport]
                  .thumbnailAlt
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
                  translations[language as keyof ITranslationsLanguageSupport]
                    .thumbnailAlt
                } ${index + 1}`}
                aria-label={`${title} - ${
                  translations[language as keyof ITranslationsLanguageSupport]
                    .thumbnailAlt
                } ${index + 1}`}
                title={`${title} - ${
                  translations[language as keyof ITranslationsLanguageSupport]
                    .thumbnailAlt
                } ${index + 1}`}
                loading="lazy"
              />
            </motion.div>
          ))}
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
          title={
            translations[language as keyof ITranslationsLanguageSupport]
              .nextButton
          }
        >
          <FaChevronRight aria-hidden="true" />
        </motion.button>
      )}
    </nav>
  );
};

export default ThumbnailSlider;
