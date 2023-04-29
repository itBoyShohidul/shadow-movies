import React, { useContext, useState } from "react";
import searchContext from "../context/searchContext";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const contextValue = useContext(searchContext);
  const { setSearch } = contextValue;

  const handleSearch = (e) => {
    setSearchInput((prev) => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch((prev) => searchInput);
  };
  return (
    <div className="search-container">
      <input
        type="search"
        className="search-input"
        value={searchInput}
        onChange={handleSearch}
      />
      <button type="search" className="search-btn" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

export default Search;
