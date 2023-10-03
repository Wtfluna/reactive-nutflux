import { useLoaderData } from "react-router-dom";
import Movie from "../../types/movie";
import axios from "axios";
import "../../scss/pages/_moviePage.scss";

export async function loader({ params }) {
  const movie = await getMovie(params.movieId);
  return movie;
}

async function getMovie(id: number): Promise<Movie> {
  // TODO mettre dans .env (API_URL)
  const response = await axios.get(`http://localhost:3000/movies/${id}`);
  return response.data[0] as Movie;
}

function MoviePage() {
  // State
  const movie = useLoaderData() as Movie;

  // Render
  //TODO: make it pretty and shine bright like a diamond, merci d'avance Clara et un coeur sur toi
  return (
    <article className="movieSheet">
      <iframe 
            width="660"
            height="415"
            src={`https://www.youtube.com/embed/${movie.trailer}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
      <h2 className="movieSheet__title">{movie.title}</h2>
      <h3 className="movieSheet__release_date group">{movie.release_date}</h3>
      <h3 className="movieSheet__duration group">{movie.duration}</h3>
      <p className="movieSheet__summary">{movie.summary}</p>
      <p className="movieSheet__pegi">{movie.pegi}</p>
      {/*
      <p className="movieSheet__director">{movie.}</p>
      <p className="movieSheet__genre">{movie.}</p>
      <p className="movieSheet__actors">{movie.}</p>*/ }
    
    </article>
  );
}
export default MoviePage;
