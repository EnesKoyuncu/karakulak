import React, { useState } from "react";
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

interface ProductsProps {
  title: string;
  description: string;
  images: string[];
  additionalInfo?: string;
}

// Container animasyonu
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

// Image section animasyonu
const imageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

// Info section animasyonu
const infoVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

// Thumbnail animasyonu
const thumbnailVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const Products: React.FC<ProductsProps> = ({
  title,
  description,
  images = [],
  additionalInfo,
}) => {
  const [selectedImage, setSelectedImage] = React.useState<string>("");
  const [startIndex, setStartIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const [visibleThumbnails, setVisibleThumbnails] = React.useState(5);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragThreshold = 50;

  React.useEffect(() => {
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

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent, //framer motion kullanıyor bu yüzden başına _ ekledik. ESlinter hatası almamak için
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

  if (!images || images.length === 0) {
    return (
      <div className="products-container">
        <div className="products-info-section">
          <h2>{title}</h2>
          <p className="description">{description}</p>
          {additionalInfo && (
            <p className="additional-info">{additionalInfo}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <motion.div
        className="products-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="products-image-section" variants={imageVariants}>
          <motion.div
            className="main-image-container"
            whileHover={{ scale: 1.02 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onClick={() => handleImageClick(images.indexOf(selectedImage))}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt={`${title} - Ana Görsel`}
                className="main-image"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                draggable={false}
              />
            </AnimatePresence>
            <motion.div className="hint-container">
              <motion.div
                className="zoom-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: isDragging ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <span>Büyütmek için tıklayın</span>
              </motion.div>
              <motion.div
                className="swipe-hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span>← Kaydırarak görüntüleyin →</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="thumbnail-slider-container">
            {startIndex > 0 && (
              <motion.button
                className="slider-nav-button prev"
                onClick={handlePrevClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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
                    >
                      <img
                        src={image}
                        alt={`${title} - Görsel ${index + 1}`}
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
              >
                <FaChevronRight />
              </motion.button>
            )}
          </div>
        </motion.div>

        <motion.div className="products-info-section" variants={infoVariants}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {description}
          </motion.p>
          {additionalInfo && (
            <motion.p
              className="additional-info"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {additionalInfo}
            </motion.p>
          )}
        </motion.div>
      </motion.div>

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
