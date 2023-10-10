import { Movie } from './movies'
import { Serie } from './series'

export interface List {
  name: string
  movies: Movie[]
  series: Serie[]
}
