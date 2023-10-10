import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import WelcomePage from "./components/pages/WelcomePage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import HomePage, { loader as listLoader } from "./components/pages/HomePage";
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
import Footer from "./components/layout/Footer";

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
    path: "/users",
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
    loader: listLoader,
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
    path: "/series",
    element: (
      <>
        <SeriesListPage />
      </>
    ),
    loader: seriesListLoader,
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
]);

export default function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

/*

Choose profile must store the chosen user and redirect to "home" (front)

Logout must clear user too (front)

Add "choose profile" link in navbar when logged in

Home must fetch the lists (require backend)

Movie should have the director, genre and maybe actors (require backend)

Could be good to have JWT token before deploying (require backend)

Add .env in front with API_URL

Deploy backend on Netlify (specify env variables), test it

Deploy front on Netlify (specify env variables), test it

*/
