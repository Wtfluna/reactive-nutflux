// import React from "react";
// import Movie from "../../types/movie";
// import axios from "axios";

// // export async function loader({ params }) {
// //   const movie = await getMovies(params.movies);
// //   return { movie };
// // }

// // async function getMovies(): Promise<Movie> {
// //   const response = await axios.get(`http://localhost:3000/movies/`);
// //   // TODO mettre dans .env
// //   return response.data[0] as Movie;
// // }

// // function MoviesListPage({ movie }) {
// //   return (
// //     <div className="moviesList">
// //       <ul>
// //         {movies.map((movie) => (
// //           <li key={movie.id}>
// //             <h2 className="moviesList__title">{movie.title}</h2>
// //             <h3 className="moviesList__release_date">{movie.release_date}</h3>
// //             <h3 className="moviesList__duration">{movie.duration}</h3>
// //             <img
// //               className="moviesList__poster"
// //               src={movie.poster}
// //               alt="poster"
// //             ></img>
// //             <p className="moviesList__summary">{movie.summary}</p>
// //             <p className="movieList_pegi">{movie.pegi}</p>
// //             {/* TODO ajouter le trailer */}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default MoviesListPage;

// async function getMovies(): Promise<Movie[]> {
//   const response = await axios.get("http://localhost:3000/movies");
//   return response.data as Movie[];
// }
// function MoviesListPage() {
//   const [movies, setMovies] = React.useState<Movie[]>([]);

//   React.useEffect(() => {
//     async function fetchMovies() {
//       const fetchedMovies = await getMovies();
//       setMovies(fetchedMovies);
//     }

//     fetchMovies();
//   }, []);

//   return (
//     <div className="moviesList">
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             <h2 className="moviesList__title">{movie.title}</h2>
//             <h3 className="moviesList__release_date">{movie.release_date}</h3>
//             <h3 className="moviesList__duration">{movie.duration}</h3>
//             <img
//               className="moviesList__poster"
//               src={movie.poster}
//               alt="poster"
//             ></img>
//             <p className="moviesList__summary">{movie.summary}</p>
//             <p className="moviesList__pegi">{movie.pegi}</p>
//             {/* TODO : ajouter le trailer */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MoviesListPage;
