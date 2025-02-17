import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "../styles/HeroSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "../hooks/useLanguage";
import { ISlideContent, slides } from "@/data/heroSliderData";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const autoPlayRef = useRef<number>();
  const { language } = useLanguage();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    swipeToSlide: true,
    waitForAnimate: false,
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
    customPaging: (i: number) => (
      <div className={`custom-dot ${i === currentSlide ? "active" : ""}`} />
    ),
  };

  useEffect(() => {
    autoPlayRef.current = window.setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, settings.autoplaySpeed);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [settings.autoplaySpeed]);

  const handleSwipe = (direction: "left" | "right") => {
    if (sliderRef.current) {
      if (direction === "left") {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    }
  };

  return (
    <div
      className="hero-slider-container"
      onTouchStart={(e) => {
        const touch = e.touches[0];
        const startX = touch.clientX;

        const handleTouchEnd = (e: TouchEvent) => {
          const touch = e.changedTouches[0];
          const endX = touch.clientX;
          const diff = startX - endX;

          if (Math.abs(diff) > 50) {
            handleSwipe(diff > 0 ? "left" : "right");
          }
        };

        document.addEventListener("touchend", handleTouchEnd, { once: true });
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <div
              className="slide-background"
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-label={
                language === "tr" ? "Slider Arka Planı" : "Slider Background"
              }
            />
            <div className="slide-content">
              <motion.div
                className="content-wrapper"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1>{slide.title[language as keyof ISlideContent["title"]]}</h1>
                <p>
                  {
                    slide.description[
                      language as keyof ISlideContent["description"]
                    ]
                  }
                </p>
                <button
                  className="cta-button"
                  aria-label={
                    language === "tr" ? "Daha Fazla Bilgi" : "Learn More"
                  }
                  title={language === "tr" ? "Daha Fazla Bilgi" : "Learn More"}
                >
                  {language === "tr" ? "Daha Fazla Bilgi" : "Learn More"}
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="slider-navigation">
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
