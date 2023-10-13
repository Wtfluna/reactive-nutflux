import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Movie from "../types/movie";
import { Link } from "react-router-dom";

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const movieGap = 20;
  const minItemWidth = 250; 

  const calculateItemsAndGap = () => {
    const maxMoviesPerSlide = movies.length; 
    const gap = movieGap; 
    const movieWidth = minItemWidth; 

    return {
      moviesPerSlide: maxMoviesPerSlide,
      gap,
      movieWidth,
    };
  };

  const [itemsAndGap, setItemsAndGap] = useState(calculateItemsAndGap());

  useEffect(() => {
    const handleResize = () => {
      setItemsAndGap(calculateItemsAndGap());
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { moviesPerSlide, gap, movieWidth } = itemsAndGap;

  const chunkedMovies = [];
  for (let i = 0; i < movies.length; i += moviesPerSlide) {
    chunkedMovies.push(movies.slice(i, i + moviesPerSlide));
  }

  return (
    <div id="moviesCarousel">
      <Carousel
        showThumbs={true}
        showStatus={true}
        dynamicHeight={false}
        infiniteLoop={true}
        showIndicators={false}
      >
        {chunkedMovies.map((movieGroup, groupIndex) => (
          <div key={groupIndex} className="moviesHome__carouselSlide">
            {movieGroup.map((movie, movieIndex) => (
              <div
                key={movie.id}
                className="moviesHome__item"
                style={{
                  width: `${movieWidth}px`,
                  marginRight:
                    movieIndex < movieGroup.length - 1 ? `${gap}px` : "0",
                }}
              >
                <img
                  className="moviesHome__poster"
                  src={movie.poster}
                  alt="affiche"
                />
                <Link to={`/movie/${movie.id}`}>
                  <div className="moviesHome__itemDetails">
                    <h2 className="moviesHome__title">{movie.title}</h2>
                    <h3 className="moviesHome__duration">{movie.duration}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
