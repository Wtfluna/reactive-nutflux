import Movie from "./movie";
import Serie from "./serie";

export interface List {
  name: string;
  movies: Movie[];
  series: Serie[];
}
