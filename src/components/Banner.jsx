import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const slides = [
  {
    id: 1,
    image: "./images/Banners_1.jpg",
    buttonText: null, // No mostrar botón
  },
  {
    id: 2,
    image: "./images/Banners-02.jpg",
    
    buttonText: "CREA TU ARMARIO PERFECTO >",
    buttonAction: () => alert("Crea tu armario perfecto"),
  },
  {
    id: 3,
    image: "./images/Banners-03.jpg",
    buttonText: "DESCUBRE MÁS >",
    buttonAction: () => alert("Explora más opciones"),
  },
];

function Banner() {
  return (
    <div className="banner-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide">
              <img src={slide.image} alt={`Slide ${slide.id}`} className="slide-image" />
              {slide.buttonText && (
                <button
                  className="slide-button"
                  onClick={slide.buttonAction}
                >
                  {slide.buttonText}
                </button>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
