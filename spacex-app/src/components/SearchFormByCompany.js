// src/components/SearchForm.js
import React, { useState } from 'react';

const SearchFormByCompany = ({ onSearch }) => {
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
        placeholder="Search by company..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchFormByCompany ;
