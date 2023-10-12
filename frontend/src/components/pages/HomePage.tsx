// import { useLoaderData } from "react-router-dom";
// import Movie from "../../types/movie";
// import Serie from "../../types/serie";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../scss/pages/_homePage.scss";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../layout/Banner";
import { List } from "../../types/list";
import { userIdKey } from "../../localStorage";

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

  // Divise les films en groupes de 6
  const chunkedMovies = [];
  for (let i = 0; i < lists.length; i += 6) {
    chunkedMovies.push(lists.slice(i, i + 6));
  }
  // Divise les séries en groupes de 6
  const chunkedSeries = [];
  for (let i = 0; i < lists.length; i += 6) {
    chunkedSeries.push(lists.slice(i, i + 6));
  }
  const movieGap = 20;
  const serieGap = 20;

  const slides = [
    { imageUrl: "./assets/lupin.png" },
    { imageUrl: "./assets/barbie.png" },
    { imageUrl: "./assets/oppenheimer.png" },
  ];

  return (
    <div className="all">
      <div className="new">
        <h2 className="new__title">What's new ?</h2>
        <Banner slides={slides} slideInterval={3000} />
      </div>
      <h2 className="movie__title">My Movie's List</h2>
      {lists.map((list) => (
        <>
          <h1 key={list.name} className="home__listName">
            {list.name}
          </h1>
          <div className="home__movies">
            <div id="moviesCarousel">
              <Carousel
                showThumbs={false}
                showStatus={false}
                dynamicHeight={false}
                infiniteLoop={true}
              >
                {list.movies.map((movie, movieIndex) => (
                  <div
                    key={movie.id}
                    className="moviesHome__item"
                    style={{
                      marginRight:
                        movieIndex < list.movies.length - 1
                          ? `${movieGap}px`
                          : "0",
                    }}
                  >
                    <img
                      className="moviesHome__poster"
                      src={movie.poster}
                      alt="poster"
                    />
                    <Link to={`/movie/${movie.id}`}>
                      <div className="moviesHome__itemDetails">
                        <h2 className="moviesHome__title">{movie.title}</h2>
                        <h3 className="moviesHome__duration">
                          {movie.duration}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </>
      ))}
      <h2 className="movie__title">My Serie's List</h2>
      {lists.map((list) => (
        <>
          <h1 key={list.name} className="home__listName">
            {list.name}
          </h1>
          <div className="home__series">
            <div id="seriesCarousel">
              <Carousel
                showThumbs={false}
                showStatus={false}
                dynamicHeight={false}
                infiniteLoop={true}
              >
                {list.series.map((serie, serieIndex) => (
                  <div
                    key={serie.id}
                    className="seriesHome__item"
                    style={{
                      marginRight:
                        serieIndex < list.series.length - 1
                          ? `${serieGap}px`
                          : "0",
                    }}
                  >
                    <img
                      className="seriesHome__poster"
                      src={serie.poster}
                      alt="poster"
                    />
                    <Link to={`/serie/${serie.id}`}>
                      <div className="seriesHome__itemDetails">
                        <h2 className="seriesHome__title">{serie.title}</h2>
                        <h3 className="seriesHome__duration">
                          {serie.duration}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </>
      ))}

      {/* <div className="seriesHome">
        <h2 className="seriesHome__listName">All Series</h2>
        <div id="seriesCarousel">
          <Carousel
            showThumbs={false}
            showStatus={false}
            dynamicHeight={false}
            infiniteLoop={true}
          >
            {chunkedSeries.map((serieGroup, index) => (
              <div key={index} className="seriesHome__carouselSlide">
                {serieGroup.map((serie, serieIndex) => (
                  <div
                    key={serie.id}
                    className="seriesHome__item"
                    style={{
                      marginRight:
                        serieIndex < serieGroup.length - 1
                          ? `${serieGap}px`
                          : "0",
                    }}
                  >
                    <img
                      className="seriesHome__poster"
                      src={serie.poster}
                      alt="poster"
                    />
                    <Link to={`/serie/${serie.id}`}><div className="seriesHome__itemDetails">
                    
                    <h2 className="seriesHome__title">{serie.title}</h2>
                      <h3 className="seriesHome__duration">{serie.duration}</h3>
                      
                  </div>
                    </Link>
                </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div> 
      */}
    </div>
  );
}

export default HomePage;
