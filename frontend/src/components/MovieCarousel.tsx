import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Movie from "../types/movie";
import { Link } from "react-router-dom";

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const movieGap = 20;
  
  // Divise les films en groupes de 6
  const chunkedMovies = [];
  for (let i = 0; i < movies.length; i += 6) {
    chunkedMovies.push(movies.slice(i, i + 6));
  }

  return (
    <div id="moviesCarousel">
      <Carousel showThumbs={false} showStatus={false} dynamicHeight={false} infiniteLoop={true}>
        {chunkedMovies.map((movieGroup, groupIndex) => (
          <div key={groupIndex} className="moviesHome__carouselSlide">
            {movieGroup.map((movie, movieIndex) => (
              <div key={movie.id} className="moviesHome__item" style={{
                marginRight: movieIndex < movieGroup.length - 1 ? `${movieGap}px` : "0",
              }}>
                <img className="moviesHome__poster" src={movie.poster} alt="poster" />
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
