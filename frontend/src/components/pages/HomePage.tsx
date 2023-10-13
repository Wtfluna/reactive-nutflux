// import { useLoaderData } from "react-router-dom";
// import Movie from "../../types/movie";
// import Serie from "../../types/serie";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../scss/pages/_homePage.scss";
import { useLoaderData } from "react-router-dom";
import { List } from "../../types/list";
import { userIdKey } from "../../localStorage";
import MovieCarousel from "../MovieCarousel";
import SerieCarousel from "../SerieCarousel";

export async function loader() {
  const lists = await getLists();
  return lists;
}

async function getLists(): Promise<List[]> {
  const userId = localStorage.getItem(userIdKey);
  // TODO mettre dans .env (API_URL)
  const response = await axios.get(
    `http://localhost:3000/lists/user/${userId}`
  );
  return response.data as List[];
}

function HomePage() {
  const lists = useLoaderData() as List[];

  return (
    <div className="all">
      <a href="/serie/7">
        <div className="banner">
          <img src="./assets/lupin.png" alt="Banner Image" />
          <div className="banner__text">Watch the new season now!</div>
        </div>
      </a>
      <h2 className="movie__title">Movies</h2>
      {lists.map((list) => (
        <>
          <h1 key={list.name} className="home__listName">
            {list.name}
          </h1>
          <div className="home__movies">
            <div className="carousel_container">
              <MovieCarousel movies={list.movies} />
            </div>
          </div>
        </>
      ))}
      <h2 className="movie__title">Series</h2>
      {lists.map((list) => (
        <>
          <h1 key={list.name} className="home__listName">
            {list.name}
          </h1>
          <div className="home__series">
            <div id="seriesCarousel">
              <div className="carousel_container">
                <SerieCarousel series={list.series} />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default HomePage;