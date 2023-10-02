
import React, { useState,useEffect } from 'react';
import CarCard from './CarCard';
import { useNavigate } from 'react-router-dom';

const CarList = ({ cars }) => {
  const cardsPerPage = 6;
  const totalPages = Math.ceil(cars.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(1);//State for count page
  const navigate = useNavigate();
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const [searchInput, setSearchInput] = useState(''); // State for search input
  const [filteredCars, setFilteredCars] = useState([]); // State for filtered cars

  useEffect(() => {
    // It will filter cars based on the search input value
    const filtered = cars.filter((car) =>
      car.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredCars(filtered);
  }, [searchInput, cars]);

  const displayedCars = filteredCars.slice(startIndex, endIndex);

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      navigate(`/page/${nextPage}`);
    }
  };
  
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      setCurrentPage(previousPage);
      navigate(`/page/${previousPage}`);
    }
  };


  return (
    <>
    <nav className="navbar sticky-top" style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container">
        <form className="d-flex" role="search" type="submit">
          <input
            className="form-control me-2"
            aria-label="Search"
            type="text"
            placeholder="Search for a car..."
            value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
      </div>
    </nav>
      <div className='container my-3'>
        <div className="row">
          {displayedCars.map((car) => (
            <div className="col-md-4 my-3" key={car.id}>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
     { !searchInput?<div className='d-flex justify-content-end'>
        <button
          type="button"
          className="btn btn-light mx-2"
          onClick={handlePreviousClick}
        >
          &laquo; Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            type="button"
            className={`btn btn-light mx-2 ${currentPage === index + 1 ? 'active' : ''}`}
            key={index + 1}
            onClick={() => {
              setCurrentPage(index + 1);
              navigate(`/page/${index + 1}`); // updating the URL
            }}
          >
            {index + 1}
          </button>
        ))}
        <button
          type="button"
          className="btn btn-light mx-2"
          onClick={handleNextClick}
        >
          Next &raquo;
        </button>
      </div>: ""}
    </>
  );
};

export default CarList;
