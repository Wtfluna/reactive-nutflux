import { useLoaderData } from "react-router-dom";
import Serie from "../../types/serie";
import axios from "axios";
import "../../scss/pages/_seriePage.scss";
import ReactPlayer from 'react-player';

export async function loader({ params }) {
  const serie = await getSerie(params.serieId);
  return { serie };
}

async function getSerie(id: number): Promise<Serie> {
  // TODO mettre dans .env (API_URL)
  const response = await axios.get(`http://localhost:3000/series/${id}`);
  return response.data[0] as Serie;
}

function SeriePage() {
  //State
  const { serie } = useLoaderData() as Serie;

  //Render
  return (
    <article className="serieSheet">
      <ReactPlayer className="serieSheet__trailer" url={serie.trailer} controls={false} playing={true}/>
      <h2 className="serieSheet__title">{serie.title}</h2>
      <h3 className="serieSheet__release_date">{serie.release_date}</h3>
      <h3 className="serieSheet__duration">{serie.duration}</h3>
      <p className="serieSheet__summary">{serie.summary}</p>
      <p className="serieSheet__pegi">{serie.pegi}</p>
      {/*
      <p className="serieSheet__director">{movie.}</p>
      <p className="serieSheet__genre">{movie.}</p>
      <p className="serieSheet__actors">{movie.}</p>
      */}
    </article>
  );
}
export default SeriePage;
