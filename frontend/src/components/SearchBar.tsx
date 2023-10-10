import { useState } from 'react';
import '../scss/components/_searchbar.scss';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;