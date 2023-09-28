import Serie from "../../types/serie";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export async function loader({ params }) {
  const serie = await getSerie(params.serieId);
  return { serie };
}

async function getSerie(id: number): Promise<Serie> {
  const response = await axios.get(`http://localhost:3000/series/${id}`);
  return response.data[0] as Serie;
}

function SeriePage() {
  const { serie } = useLoaderData();
  return (
    <article className="serie_sheet">
      <h2 className="serie_sheet__title">{serie.title}</h2>
      <h3 className="serie_sheet__release_date">{serie.release_date}</h3>
      <h3 className="serie_sheet__duration">{serie.duration}</h3>
      <img
        className="serie_sheet__poster"
        src={serie.poster}
        alt="poster"
      ></img>
      <p className="serie_sheet__summary">{serie.summary}</p>
      <p className="serie_sheet__pegi">{serie.pegi}</p>
    </article>
  );
}
export default SeriePage;
