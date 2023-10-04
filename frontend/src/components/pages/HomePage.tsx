import { useLoaderData } from "react-router-dom";
import Movie from "../../types/movie";
import Serie from "../../types/serie";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../scss/pages/_homePage.scss";

export async function combinedLoader() {
  const [movies, series] = await Promise.all([getMovies(), getSeries()]);
  return { movies, series };
}

async function getMovies(): Promise<Movie[]> {
  // TODO: mettre dans .env (API_URL)
  const response = await axios.get("http://localhost:3000/movies/all");
  return response.data as Movie[];
}

async function getSeries(): Promise<Serie[]> {
  // TODO: mettre dans .env (API_URL)
  const response = await axios.get("http://localhost:3000/series/all");
  return response.data as Serie[];
}

function HomePage() {
  const { movies, series } = useLoaderData() as {
    movies: Movie[];
    series: Serie[];
  };

  // Divise les films en groupes de 6
  const chunkedMovies = [];
  for (let i = 0; i < movies.length; i += 6) {
    chunkedMovies.push(movies.slice(i, i + 6));
  }
  // Divise les séries en groupes de 6
  const chunkedSeries = [];
  for (let i = 0; i < series.length; i += 6) {
    chunkedSeries.push(series.slice(i, i + 6));
  }
  const movieGap = 20;
  const serieGap = 20;

  return (
    <div className="all">
      <div className="new">
        <h2 className="new__title">What's new ?</h2>
        <img className="new__image" /*src="./assets/banner.png"*/ alt="Oppenheimer banner"/>
      </div>
      <div className="moviesHome">
        <h2 className="moviesHome__listName">All movies</h2>
        <div id="moviesCarousel">
        <Carousel
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
          infiniteLoop={true}
        >
          {chunkedMovies.map((movieGroup, index) => (
            <div key={index} className="moviesHome__carouselSlide">
              {movieGroup.map((movie, movieIndex) => (
                <div
                  key={movie.id}
                  className="moviesHome__item"
                  style={{
                    marginRight:
                      movieIndex < movieGroup.length - 1
                        ? `${movieGap}px`
                        : "0",
                  }}
                >
                  <img
                    className="moviesHome__poster"
                    src={movie.poster}
                    alt="poster"
                  />
                  <div className="moviesHome__itemDetails">
                    <h2 className="moviesHome__title">{movie.title}</h2>
                    <h3 className="moviesHome__duration">{movie.duration}</h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
        </div>
      </div>

      <div className="seriesHome">
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
                  <div className="seriesHome__itemDetails">
                    <h2 className="seriesHome__title">{serie.title}</h2>
                    <h3 className="seriesHome__duration">{serie.duration}</h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
