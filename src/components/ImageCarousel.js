import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const nextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
      setTranslateValue(0);
    } else {
      setCurrentIndex(currentIndex + 1);
      setTranslateValue(translateValue - 100 / images.length);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
      setTranslateValue(-100 + 100 / images.length);
    } else {
      setCurrentIndex(currentIndex - 1);
      setTranslateValue(translateValue + 100 / images.length);
    }
  };

  return (
    <div className="image-carousel">
      <div
        className="slider"
        style={{
          transform: `translateX(${translateValue}%)`,
          transition: "transform ease-out 0.45s",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </div>
      <button className="btn prev" onClick={prevSlide}>
        <i className="fas fa-chevron-left" />
      </button>
      <button className="btn next" onClick={nextSlide}>
        <i className="fas fa-chevron-right" />
      </button>
    </div>
  );
};

export default ImageCarousel;
