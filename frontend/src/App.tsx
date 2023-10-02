import { createBrowserRouter, RouterProvider } from "react-router-dom";

/*/SLIDER CAROUSEL
import Slider from "./components/pages/HomePage";

export default function App(){
 return (
   <>
     <Slider/>
   </>
 );
}

/*CHOOSE PROFILE
import ChooseProfile from "./components/pages/ChooseProfile";

export default function App(){
 return (
   <>
     <ChooseProfile/>
   </>
 );
}
*/

/*SIGN UP 
 import Navbar from "./components/Navbar/Navbar";
 import SignUp from "./components/pages/SignUp";
 
 export default function App(){
  return (
    <>
      <Navbar />
      <SignUp/>
    </>
  );
 }
*/

/*//LOGIN 
import Navbar from "./components/Navbar/Navbar";
import LogIn from "./components/pages/LogIn";

export default function App() {
  return (
    <>
      <Navbar />
      <LogIn />
    </>
  );
}
*/
// WELCOME PAGE
import Navbar from "./components/layout/Navbar";
import WelcomePage from "./components/pages/WelcomePage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import HomePage, { combinedLoader } from "./components/pages/HomePage";
import ChooseProfilePage, {
  loader as usersLoader,
} from "./components/pages/ChooseProfilePage";

import MoviePage, { loader as movieLoader } from "./components/pages/MoviePage";

import MoviesListPage, {
  loader as moviesListLoader,
} from "./components/pages/MoviesListPage";

import SeriePage, {
  loader as serieLoader,
} from "./components/pages/SeriesPage";

import SeriesListPage, {
  loader as seriesListLoader,
} from "./components/pages/SeriesListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <WelcomePage />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <RegisterPage />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <LoginPage />
      </>
    ),
  },
  {
    path: "/user/:userId",
    element: (
      <>
        <ChooseProfilePage />
      </>
    ),
    loader: usersLoader,
  },
  {
    path: "/home",
    element: (
      <>
        <HomePage />
      </>
    ),
    loader: combinedLoader,
  },
  {
    path: "/movies",
    element: (
      <>
        <MoviesListPage />
      </>
    ),
    loader: moviesListLoader,
  },
  {
    path: "/movie/:movieId",
    element: (
      <>
        <MoviePage />
      </>
    ),
    loader: movieLoader,
  },
  {
    path: "/serie/:serieId",
    element: (
      <>
        <SeriePage />
      </>
    ),
    loader: serieLoader,
  },
 { path: "/series",
  element: (
    <>
      <SeriesListPage />
    </>
  ),
  loader: seriesListLoader,
},
]);

export default function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      {/* TODO: ajouter footer quand il sera prêt */}
    </>
  );
}

//APP
/*import MoviePage from "./components/MoviePage";
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
  ];

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
*/

// const axios = require("axios").default;

// TODO: c'était pour l'exemple, ça ira dans une autre page
// await axios.post("http://localhost:3000/register", {
//   username: "Fred",
//   email: "Pierrafeu",
//   password: "",
// });

// auth controller et webtokens json pour login
// nodemailer pour envoyer mail de confirmation register