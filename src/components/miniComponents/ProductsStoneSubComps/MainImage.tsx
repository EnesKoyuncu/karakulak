import React from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ITranslationsLanguageSupport } from "@/data/productsStoneData";

interface MainImageProps {
  selectedImage: string;
  title: string;
  translations: ITranslationsLanguageSupport;
  language: string;
  handleImageClick: () => void;
  handleMainImageKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
  handleDragStart: () => void;
  handleDragEnd: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => void;
  isDragging: boolean;
}

const MainImage: React.FC<MainImageProps> = ({
  selectedImage,
  title,
  translations,
  language,
  handleImageClick,
  handleMainImageKeyDown,
  handleDragStart,
  handleDragEnd,
  isDragging,
}) => {
  return (
    <motion.figure
      className="main-image-container"
      role="button"
      tabIndex={0}
      aria-label={
        translations[language as keyof ITranslationsLanguageSupport].zoomHint
      }
      onKeyDown={handleMainImageKeyDown}
      onClick={handleImageClick}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
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
  );
};

export default MainImage;
