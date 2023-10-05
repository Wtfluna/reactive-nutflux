import Movie from "./movie";

interface List {
  id: number;
  name: string;
  user_id: number;
  movies: Movie[];
}

export default List;
