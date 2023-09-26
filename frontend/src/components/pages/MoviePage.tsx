import Movie from "../../types/movie";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export async function loader({ params }) {
  const movie = await getMovie(params.movieId);
  return { movie };
}

async function getMovie(id: number): Promise<Movie> {
  const response = await axios.get(`http://localhost:3000/movies/${id}`);
  return response.data[0] as Movie;
}

function MoviePage() {
  const { movie } = useLoaderData();
  return (
    <article className="movie_sheet">
      <h2 className="movie_sheet__title">{movie.title}</h2>
      <h3 className="movie_sheet__release_date">{movie.release_date}</h3>
      <h3 className="movie_sheet__duration">{movie.duration}</h3>
      <img
        className="movie_sheet__poster"
        src={movie.poster}
        alt="poster"
      ></img>
      <p className="movie_sheet__summary">{movie.summary}</p>
      <p className="movie_sheet__pegi">{movie.pegi}</p>
    </article>
  );
}
export default MoviePage;
