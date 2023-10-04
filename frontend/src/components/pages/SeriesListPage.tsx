import { useLoaderData, Link } from "react-router-dom";
import serie from "../../types/serie";
import axios from "axios";
import "../../scss/pages/_seriesList.scss";
import Serie from "../../types/serie";

export async function loader() {
  const series = await getSeries();
  return series;
}

async function getSeries(): Promise<Serie[]> {
  // TODO mettre dans .env (API_URL)
  const response = await axios.get("http://localhost:3000/series/all");
  return response.data as serie[];
}

function SeriesListPage() {
  // State
  const series = useLoaderData() as Serie[];

  // Render
  return (
    <div className="seriesList">
      <h2 className="seriesList__listName">All Series</h2>
      <div className="seriesList__items">
        {series.map((serie) => (
          <div key={serie.id} className="seriesList__item">
            <img
              className="seriesList__poster"
              src={serie.poster}
              alt="poster"
            />
            <Link to={`/serie/${serie.id}`}>
              <div className="seriesList__itemDetails">
                <h2 className="seriesList__title">{serie.title}</h2>
                <h3 className="seriesList__duration">{serie.duration}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeriesListPage;
