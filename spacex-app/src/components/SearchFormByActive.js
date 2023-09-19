// src/components/SearchForm.js
import React, { useState } from 'react';

const SearchFormByActive = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-form bg-blue-500 p-4 md:p-8">
      <input
        type="text"
        placeholder="Search by Active..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchFormByActive;
