import React, { useState } from "react";
import Slider from "react-slick";
import "../styles/HeroSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlideContent {
  image: string;
  title: string;
  description: string;
}

const slides: SlideContent[] = [
  {
    image: "/images/slider1.jpg", // Bu yolları kendi resim yollarınızla değiştirin
    title: "Türkiye'nin Lider Araç Üstü Ekipman Üreticisi",
    description:
      "40 yılı aşkın tecrübemizle kaliteli ve güvenilir çözümler sunuyoruz",
  },
  {
    image: "/images/slider2.jpg",
    title: "Global Pazarda Güçlü Bir Marka",
    description: "50'den fazla ülkeye ihracat yapan güvenilir çözüm ortağınız",
  },

  {
    image: "/images/slider3.jpg",
    title: "Yenilikçi Teknolojiler",
    description: "Modern üretim tesislerimizde en son teknolojilerle üretim",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
    customPaging: (i: number) => (
      <div className={`custom-dot ${i === currentSlide ? "active" : ""}`} />
    ),
  };

  return (
    <div className="hero-slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <div
              className="slide-background"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="slide-content">
              <div className="content-wrapper">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <button className="cta-button">Daha Fazla Bilgi</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation */}
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
