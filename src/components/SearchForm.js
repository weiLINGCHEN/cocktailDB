import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    searchRef.current.focus();
  }, []);
  return (
    <section className="search section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="search">Search Your Favorite Cocktail</label>
          <input
            type="text"
            name="search"
            id="search"
            ref={searchRef}
            onChange={() => setSearchTerm(searchRef.current.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
