import React, { useState } from 'react';
import './SearchBar.scss';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // Add your search logic here (e.g., redirect, API call, etc.)
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <i className="search-icon">&#128269;</i>
        </button>
      </form>
    </div>
  );
};

export default Search;
