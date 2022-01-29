import React from 'react';
import "./Search.css"
function Search() {

  return (
    <div>
      <div className="search-container">
        <div className="Faculty">
          <label htmlFor="Faculty">
            Faculty
            <input
              type="text"
              className="input"
              placeholder="Enter a faculty.."
            />
          </label>
        </div>

        <div className="Professor">
          <label htmlFor="Professor">
            Professor
            <input
              type="text"
              className="input"
              placeholder="Enter a Professor.."
            />
          </label>
        </div>

        <div className="term-length">
          <label htmlFor="term-lengths">
            Term-length
            <input
              type="text"
              className="input"
              placeholder="Enter term-length"
            />
          </label>
        </div>

        <div className="filter-button">
          <button className="btn-filter">Filter</button>
        </div>
      </div>
    </div>
  );
}

export default Search;

