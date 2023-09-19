// src/App.js
import React, { Suspense, lazy,  useState, useEffect } from 'react';
import Banner from './components/Banner';
import SearchFormByName from './components/SearchFormByName';
import SearchFormByActive from './components/SearchFormByActive';
import SearchFormByCompany from './components/SearchFormByCompany';
import Pagination from './components/Pagination';
import { getRockets } from './api/spacex';
import Loading from './components/Loading'; 
import Error from './components/Error';

const DataGrid = lazy(() => import('./components/DataGrid'));
const App = () => {
  const [rockets, setRockets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getRockets()
      .then((data) => {
        setRockets(data);
        setSearchResults(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching SpaceX data:', error);
        setError('Failed to fetch data. Please try again later.'); // Set the error message
        setLoading(false);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchByName = (searchTerm) => {
    const filteredResults = rockets.filter((rocket) =>
      rocket.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setCurrentPage(1); // Reset to the first page after a search
  };
  const handleSearchByCompany = (searchTerm) => {
    const filteredResults = rockets.filter((rocket) =>
      rocket.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setCurrentPage(1); // Reset to the first page after a search
  };
  const handleSearchByActive = (searchTerm) => {
    const filteredResults = rockets.filter((rocket) =>
      (rocket.active+"").toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setCurrentPage(1); // Reset to the first page after a search
  };

  return(
    <div className="App">
      <Banner />
      <SearchFormByName onSearch={handleSearchByName} />
      <SearchFormByCompany onSearch={handleSearchByCompany} />
      <SearchFormByActive onSearch={handleSearchByActive} />
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={error} /> // Display the error component
      ) : (
        <>
           <Suspense fallback={<Loading />}>
        <DataGrid rockets={currentItems} />
      </Suspense>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={searchResults.length}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};

export default App;
