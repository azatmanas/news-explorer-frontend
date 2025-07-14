import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <form className="search__form">
      <div className="search__form-container">
        <input
          type="text"
          placeholder="Enter topic"
          value={searchTerm}
          onChange={setSearchTerm}
          disabled={isLoading}
          aria-label="Search input"
        />
        <button
          className="search__form-button"
          type="submit"
          disabled={isLoading}
          aria-label="Search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
