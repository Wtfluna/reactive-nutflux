import { useState, useEffect } from 'react';
import "../scss/components/_banner.scss"

const Banner = ({ slides, slideInterval }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the index of the next slide
      const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
      setCurrentSlideIndex(nextSlideIndex);
    }, slideInterval);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentSlideIndex, slideInterval, slides.length]);

  return (
    <div className="banner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlideIndex ? 'active' : ''}`}
        >
          <img src={slide.imageUrl} alt={`slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Banner;
