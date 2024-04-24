import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

function SearchBox() {
  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="search"
          name="search"
          aria-label="Search here"
          placeholder="Type keywords here..."
          className="search-input"
        />

        <button
          className="search-submit"
          aria-label="Submit search"
        >
          <IoSearchOutline className="icon" />
        </button>
      </div>

      <button
        className="search-close-btn"
        aria-label="Cancel search"
      ></button>
    </div>
  );
}

export default SearchBox;
