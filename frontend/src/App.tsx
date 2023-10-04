import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  {
    path: "/series",
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
