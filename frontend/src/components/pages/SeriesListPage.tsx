import { useState } from 'react';
import axios from 'axios';
import { useLoaderData, Link } from 'react-router-dom';
import Serie from '../../types/serie';
import '../../scss/pages/_seriesList.scss';
import SearchBar from '../SearchBar'; // Import the SearchBar component

export async function loader() {
  const series = await getSeries();
  return series;
}

async function getSeries(): Promise<Serie[]> {
  // TODO mettre dans .env (API_URL)
  const response = await axios.get('http://localhost:3000/series/all');
  return response.data as Serie[];
}

function SeriesListPage() {
  // State
  const series = useLoaderData() as Serie[];
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter series based on search query
  const filteredSeries = series.filter((serie) =>
    serie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render
  return (
    <div className="seriesList"> 
    <SearchBar onSearch={handleSearch}/>
      <h2 className="seriesList__listName">All Series</h2>
      <div className="seriesList__items">
        {filteredSeries.map((serie) => (
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
