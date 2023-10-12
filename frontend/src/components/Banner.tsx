import { useState, useEffect } from 'react';
import '../scss/components/_banner.scss';

const Banner = ({ slides, slideInterval }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the index of the next slide
      const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
      setCurrentSlideIndex(nextSlideIndex);
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, [currentSlideIndex, slideInterval, slides.length]);

  return (
    <div className="banner">
      {slides.map((slide, index) => (
        <div
        onClick={() => {
          window.location.href = "/serie/7";}} 
          key={index}
          className={`banner__slide ${index === currentSlideIndex ? 'banner__slide_active' : ''}`}
        >
          <img src={slide.imageUrl} alt={`slide ${index + 1}`} />
          <div className="banner__text">{slide.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
