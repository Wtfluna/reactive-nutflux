import Director from "./director";
import Genre from "./genre";

interface Movie {
  id: number;
  title: string;
  duration: string;
  release_date: number;
  summary: string;
  director: Director;
  genre: Genre;
  pegi: number;
  trailer: string;
  poster: string;
}

export default Movie;
