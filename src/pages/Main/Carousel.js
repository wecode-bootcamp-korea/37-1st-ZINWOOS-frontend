import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevBtn = () => {
    setCurrentSlide(current => current + 100);
    if (currentSlide === 0) {
      return setCurrentSlide(0);
    }
  };

  const nextBtn = () => {
    setCurrentSlide(current => current - 100);
    if (currentSlide === -300) {
      return setCurrentSlide(0);
    }
  };

  const infinite = () => {
    setCurrentSlide(current => current - 100);

    if (currentSlide === -300) {
      return setCurrentSlide(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      infinite();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="Carousel">
      <div
        className="carousel-container"
        style={{ transform: `transLateX(${currentSlide}vw)` }}
      >
        {MAIN_CAROUSEL.map((item, index) => {
          return (
            <img
              className="main-pic"
              key={index}
              src={item.src}
              alt={item.name}
            />
          );
        })}
      </div>
      <button className="carousel-prev-btn" onClick={prevBtn}>
        <div className="square-box" />
      </button>
      <button className="carousel-next-btn" onClick={nextBtn}>
        <div className="square-box" />
      </button>
    </div>
  );
};

export default Carousel;

const MAIN_CAROUSEL = [
  {
    id: 1,
    name: '진우님-메인사진1',
    src: 'images/Main/IMG_2046.jpg',
  },
  {
    id: 2,
    name: '진우님-메인사진2',
    src: 'images/Main/IMG_2282.jpg',
  },
  {
    id: 3,
    name: '진우님-메인사진3',
    src: 'images/Main/n_IMG_5104.jpg',
  },
  {
    id: 4,
    name: '진우님-메인사진4',
    src: 'images/Main/n_IMG_5588.jpg',
  },
];
