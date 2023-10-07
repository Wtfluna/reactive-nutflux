import { useLoaderData } from "react-router-dom";
import Movie from "../../types/movie";
import axios from "axios";
import ReactPlayer from "react-player";
import "../../scss/pages/_moviePage.scss";

export async function loader({ params }) {
  const movie = await getMovie(params.movieId);
  return movie;
}

async function getMovie(id: number): Promise<Movie> {
  // TODO mettre dans .env (API_URL)
  const response = await axios.get(`http://localhost:3000/movies/${id}`);
  return response.data as Movie;
}

function MoviePage() {
  // State
  const movie = useLoaderData() as Movie;

  // Render
  return (
    <article className="movieSheet">
      <ReactPlayer url={movie.trailer} controls={true} />
      <h2 className="movieSheet__title">{movie.title}</h2>
      <h3 className="movieSheet__release_date">{movie.release_date}</h3>
      <h3 className="movieSheet__duration">{movie.duration}</h3>
      <p className="movieSheet__summary">{movie.summary}</p>
      <p className="movieSheet__pegi">{movie.pegi}</p>
      {/* <p className="director">
        {movie.director.firstname} {movie.director.lastname}
      </p> */}
      {/*
      <p className="movieSheet__director">{movie.}</p>
      <p className="movieSheet__genre">{movie.}</p>
      <p className="movieSheet__actors">{movie.}</p>
      */}
    </article>
  );
}
export default MoviePage;
