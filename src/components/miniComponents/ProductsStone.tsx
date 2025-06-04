import React, { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import "../../styles/miniComponentsStyle/ProductsStone.css";
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
import ThumbnailSlider from "@/components/miniComponents/ProductsStoneSubComps/ThumbnailSlider";
import MainImage from "@/components/miniComponents/ProductsStoneSubComps/MainImage";

const Products: React.FC<ProductsProps> = ({
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
  const [isDragging, setIsDragging] = useState(false);
  const { language } = useLanguage();

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

    // Değişen ekran ölçeğine göre öne çıkan küçük foto sayısını kontrol eder.
    updateVisibleThumbnails();
    window.addEventListener("resize", updateVisibleThumbnails);
    return () => {
      window.removeEventListener("resize", updateVisibleThumbnails);
    };
  }, [images]);

  const handleDragStart = () => {
    setIsDragging(true);
  };


  // Sıradaki başlangıç fotosu olmadığı müddetçe maks 1saniye aralıklarla fare hareketine göre bir önce veya sonraki resme kaydırır.
  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const dragDistance = info.offset.x;
    const currentIndex = images.indexOf(selectedImage);

    if (Math.abs(dragDistance) > 50) {
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
            <p className="additional-info">{additionalInfo} asdasdasdasdasdsad</p>
          )}
        </section>
      </article>
    );
  }

  return (
    <>
      <article className="products-container">
        <motion.section
          className="products-image-section"
          aria-label={
            translations[language as keyof ITranslationsLanguageSupport]
              .productImagesSection
          }
          style={{ cursor: isDragging ? "grabbing" : "grab" , maxWidth: 800, maxHeight: 600, width: "100%" }}

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MainImage
            selectedImage={selectedImage}
            title={title}
            translations={translations}
            language={language}
            handleImageClick={() =>
              handleImageClick(images.indexOf(selectedImage))
            }
            handleMainImageKeyDown={handleMainImageKeyDown}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
            isDragging={isDragging}
          />

          <ThumbnailSlider
            images={images}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            startIndex={startIndex}
            setStartIndex={setStartIndex}
            visibleThumbnails={visibleThumbnails}
            translations={translations}
            language={language}
            title={title}
          />
        </motion.section>

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
          <h2 style={{ textAlign: "center" }}>{title}</h2>
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

export default Products;
