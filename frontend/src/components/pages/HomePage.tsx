import React, { useEffect, useState, useRef } from 'react';
import '../../scss/pages/homepage.scss';

interface Movie {
  Poster: string;
}

function Slider() {
  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const [scrollPerClick, setScrollPerClick] = useState<number>(20);
  const ImagePadding: number = 20;
  const [movies, setMovies] = useState<Movie[]>([]);
  const slidersRef = useRef<HTMLDivElement | null>(null);

  const sliderScrollLeft = () => {
    const newScrollAmount = scrollAmount - scrollPerClick;
    setScrollAmount(newScrollAmount < 0 ? 0 : newScrollAmount);
  };

  const sliderScrollRight = () => {
    if (slidersRef.current) {
      const maxScrollAmount = slidersRef.current.scrollWidth - slidersRef.current.clientWidth;
      const newScrollAmount = scrollAmount + scrollPerClick;
      setScrollAmount(newScrollAmount <= maxScrollAmount ? newScrollAmount : maxScrollAmount);
    }
  };

  const showMovieData = async () => {
    try {
      const res = await fetch('https://www.omdbapi.com/?s=Batman&apikey=21f0594b&plot=full');
      const json = await res.json();
      const fetchedMovies: Movie[] = json.Search || [];
      setMovies(fetchedMovies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showMovieData();
  }, []);

  useEffect(() => {
    setScrollPerClick(400); 
  }, []);

  useEffect(() => {
    if (slidersRef.current) {
      slidersRef.current.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }, [scrollAmount]);

  return (
    <div className="NetflixSlider">
      <div className="carousel">
        <div className="carousel-box" ref={slidersRef}>
          {movies.map((el, index) => (
            <img key={index} className={`img-${index} slider-img`} src={el.Poster} alt="" />
          ))}
        </div>
        <button className="switch-left slider-button" onClick={sliderScrollLeft}>&lt;</button>
        <button className="switch-right slider-button" onClick={sliderScrollRight}>&gt;</button>
      </div>
    </div>
  );
}

export default Slider;
