import Movie from "../../types/movie";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export async function loader({ params }) {
  const movie = await getMovie(params.movieId);
  return { movie };
}

async function getMovie(id: number): Promise<Movie> {
  const response = await axios.get(`http://localhost:3000/movies/${id}`);

  // TODO: c'était pour l'exemple, ça ira dans une autre page
  // await axios.post("http://localhost:3000/register", {
  //   username: "Fred",
  //   email: "Pierrafeu",
  //   password: "",
  // });

  // TODO mettre dans .env
  return response.data[0] as Movie;
}

//TODO: make it pretty and shine bright like a diamond, merci d'avance Clara et un coeur sur toi

function MoviePage() {
  const { movie } = useLoaderData();
  return (
    <article className="movieSheet">
      <h2 className="movieSheet__title">{movie.title}</h2>
      <h3 className="movieSheet__release_date">{movie.release_date}</h3>
      <h3 className="movieSheet__duration">{movie.duration}</h3>
      <img className="movieSheet__poster" src={movie.poster} alt="poster"></img>
      <p className="movieSheet__summary">{movie.summary}</p>
      <p className="movieSheet__pegi">{movie.pegi}</p>
      {/* TODO ajouter le trailer */}
    </article>
  );
}
export default MoviePage;
