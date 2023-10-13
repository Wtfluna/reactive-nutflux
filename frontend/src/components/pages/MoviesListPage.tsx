import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import "../../scss/pages/_moviesList.scss";
import Movie from "../../types/movie";

export async function loader() {
  const movies = await getMovies();
  return movies;
}

async function getMovies(): Promise<Movie[]> {
  // TODO mettre dans .env (API_URL)
  const response = await axios.get("http://localhost:3000/movies/all");
  return response.data as Movie[];
}

function MoviesListPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const movieData = await getMovies();
      setMovies(movieData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    // Filter movies based on search query
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movies, searchQuery]);

  return (
    <div className="moviesList">
      <h2 className="moviesList__listName">All Movies</h2>

      {/* Use the SearchBar component */}
      <SearchBar onSearch={setSearchQuery} />

      <div className="moviesList__items">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="moviesList__item">
            <img
              className="moviesList__poster"
              src={movie.poster}
              alt="poster"
            />
            <Link to={`/movie/${movie.id}`}>
              <div className="moviesList__itemDetails">
                <h2 className="moviesList__title">{movie.title}</h2>
                <h3 className="moviesList__duration">{movie.duration}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesListPage;
