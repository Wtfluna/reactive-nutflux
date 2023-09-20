import MoviePage from "./components/MoviePage";
import Movie from "./types/movie";

function App() {
  // const id: number = 1;

  // TODO: call backend (install axios, make backend work...)
  // const movie: Movie = axios.get(`http://localhost:3000/movies/${id}`);
  const movie: Movie = {
    id: 1,
    title: "Reservoir Dogs",
    duration: "01:39:00",
    release_date: 1992,
    summary:
      "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    director_id: 1,
    genre_id: 11,
    pegi: 18,
    trailer: "https://www.youtube.com/watch?v=GLPJSmUHZvU",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  };
  // const movies: Movie[] = [
  //   {
  //     id: 1,
  //     title: "Reservoir Dogs",
  //     duration: "01:39:00",
  //     release_date: 1992,
  //     summary:
  //       "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
  //     director_id: 1,
  //     genre_id: 11,
  //     pegi: 18,
  //     trailer: "https://www.youtube.com/watch?v=GLPJSmUHZvU",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  //   },
  //   {
  //     id: 1,
  //     title: "Reservoir Dogs Reservoir Dogs Reservoir Dogs Reservoir Dogs Reservoir Dogs Reservoir Dogs Reservoir Dogs",
  //     duration: "01:39:00",
  //     release_date: 1992,
  //     summary:
  //       "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
  //     director_id: 1,
  //     genre_id: 11,
  //     pegi: 18,
  //     trailer: "https://www.youtube.com/watch?v=GLPJSmUHZvU",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  //   },
  //   {
  //     id: 1,
  //     title: "Reservoir Dogs",
  //     duration: "01:39:00",
  //     release_date: 1992,
  //     summary:
  //       "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
  //     director_id: 1,
  //     genre_id: 11,
  //     pegi: 18,
  //     trailer: "https://www.youtube.com/watch?v=GLPJSmUHZvU",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  //   },
  //   {
  //     id: 1,
  //     title: "Reservoir Dogs",
  //     duration: "01:39:00",
  //     release_date: 1992,
  //     summary:
  //       "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
  //     director_id: 1,
  //     genre_id: 11,
  //     pegi: 18,
  //     trailer: "https://www.youtube.com/watch?v=GLPJSmUHZvU",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  //   },
  //   {
  //     id: 1,
  //     title: "Reservoir Dogs",
  //     duration: "01:39:00",
  //     release_date: 1992,
  //     summary:
  //       "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
  //     director_id: 1,
  //     genre_id: 11,
  //     pegi: 18,
  //     trailer: "https://www.youtube.com/watch?v=GLPJSmUHZvU",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  //   },
  //   {
  //     id: 1,
  //     title: "Reservoir Dogs",
  //     duration: "01:39:00",
  //     release_date: 1992,
  //     summary:
  //       "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
  //     director_id: 1,
  //     genre_id: 11,
  //     pegi: 18,
  //     trailer: "https://www.youtube.com/watch?v=GLPJSmUHZvU",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  //   },
  //   {
  //     id: 1,
  //     title: "Reservoir Dogs",
  //     duration: "01:39:00",
  //     release_date: 1992,
  //     summary:
  //       "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
  //     director_id: 1,
  //     genre_id: 11,
  //     pegi: 18,
  //     trailer: "https://www.youtube.com/watch?v=GLPJSmUHZvU",
  //     poster:
  //       "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  //   },
  // ];

  return (
    <>
      <h1> Mon super titre</h1>
      <Header />
      <MoviePage movie={movie}></MoviePage>
      <Footer />
    </>
  );
}

export default App;
