import React from "react";
import { motion } from "framer-motion";
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

  React.useEffect(() => {
    if (images && images.length > 0) {
      setSelectedImage(images[0]);
      setStartIndex(0);
      setPhotoIndex(0);
    }

    const updateVisibleThumbnails = () => {
      if (window.innerWidth <= 768) {
        setVisibleThumbnails(4);
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

  const maxStartIndex = Math.max(0, images.length - visibleThumbnails);

  const handlePrevClick = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextClick = () => {
    setStartIndex((prev) => Math.min(maxStartIndex, prev + 1));
  };

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const thumbnailStyle = {
    transform: `translateX(-${startIndex * (120 + 16)}px)`,
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
      <div className="products-container">
        <div className="products-image-section">
          <motion.div
            className="main-image-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleImageClick(images.indexOf(selectedImage))}
          >
            <img src={selectedImage} alt={title} className="main-image" />
            <div className="zoom-hint">
              <span>Büyütmek için tıklayın</span>
            </div>
          </motion.div>

          <div className="thumbnail-slider-container">
            {startIndex > 0 && (
              <button className="slider-button prev" onClick={handlePrevClick}>
                <FaChevronLeft />
              </button>
            )}

            <div className="thumbnail-container" style={thumbnailStyle}>
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`thumbnail ${
                    selectedImage === image ? "active" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image} alt={`${title}-${index}`} />
                </motion.div>
              ))}
            </div>

            {startIndex < maxStartIndex && (
              <button className="slider-button next" onClick={handleNextClick}>
                <FaChevronRight />
              </button>
            )}
          </div>
        </div>

        <motion.div
          className="products-info-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>{title}</h2>
          <p className="description">{description}</p>
          {additionalInfo && (
            <p className="additional-info">{additionalInfo}</p>
          )}
        </motion.div>
      </div>

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
