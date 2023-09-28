import Movie from "../../types/movie";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export async function loader() {
  const movies = await getMovies();
  return { movies };
}

async function getMovies(): Promise<Movie[]> {
  const response = await axios.get("http://localhost:3000/movies/all");
  // TODO mettre dans .env
  return response.data as Movie[];
}

//TODO: make it pretty and shine bright like a diamond, merci d'avance Clara et un coeur sur toi

function MoviesListPage() {
  const { movies } = useLoaderData();
  return (
    <div className="moviesList">
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2 className="moviesList__title">{movie.title}</h2>
            <h3 className="moviesList__release_date">{movie.release_date}</h3>
            <h3 className="moviesList__duration">{movie.duration}</h3>
            <img
              className="moviesList__poster"
              src={movie.poster}
              alt="poster"
            ></img>
            <p className="moviesList__summary">{movie.summary}</p>
            <p className="moviesList__pegi">{movie.pegi}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesListPage;
