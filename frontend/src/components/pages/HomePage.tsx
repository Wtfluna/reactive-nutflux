import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import Movie from '../../types/movie';
import Serie from '../../types/serie';
import '../../scss/pages/_homePage.scss';
import Banner from '../Banner';
import MovieCarousel from '../MovieCarousel';
import SerieCarousel from '../SerieCarousel';

export async function combinedLoader() {
  const [movies, series] = await Promise.all([getMovies(), getSeries()]);
  return { movies, series };
}

async function getMovies(): Promise<Movie[]> {
  // TODO: mettre dans .env (API_URL)
  const response = await axios.get('http://localhost:3000/movies/all');
  return response.data as Movie[];
}

async function getSeries(): Promise<Serie[]> {
  // TODO: mettre dans .env (API_URL)
  const response = await axios.get('http://localhost:3000/series/all');
  return response.data as Serie[];
}

function HomePage() {
  const { movies, series } = useLoaderData() as {
    movies: Movie[];
    series: Serie[];
  };

  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const [filteredSeries, setFilteredSeries] = useState<Serie[]>(series);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  useEffect(() => {
    setFilteredSeries(series);
  }, [series]);

  const slides = [
    { imageUrl: './assets/lupin.png', text: 'Watch the new season now!' },
    {/*{ imageUrl: './assets/barbie.png'},
  { imageUrl: './assets/oppenheimer.png'},*/}
  ];

  return (
    <div className="all">
      <Banner slides={slides} slideInterval={0} />
      <div className="moviesHome">
        <h2 className="moviesHome__listName">All movies</h2>
        <div className="carousel_container">
          <MovieCarousel movies={filteredMovies} />
          </div>
        
      </div>

      <div className="seriesHome">
        <h2 className="seriesHome__listName">All Series</h2>
        <div className="carousel_container">
          <SerieCarousel series={filteredSeries} />
          </div>
      </div>
    </div>
  );
}

export default HomePage;
