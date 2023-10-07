import { useLoaderData } from "react-router-dom";
import Movie from "../../types/movie";
import axios from "axios";
import "../../scss/pages/_moviesList.scss";
import { Link } from "react-router-dom";

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
  // State
  const movies = useLoaderData() as Movie[];

  // Render
  return (
    <div className="moviesList">
      <h2 className="moviesList__listName">All Movies</h2>
      <div className="moviesList__items">
        {movies.map((movie) => (
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
