/* eslint-disable react/prop-types */
// import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <div>
        <img src="/search1.svg" alt="search" />

        <input
          type="text"
          placeholder="search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
export default Search;
