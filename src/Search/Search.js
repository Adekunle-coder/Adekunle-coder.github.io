import React, { useContext } from "react";
import { EventContext } from "../EventContext";
import "./Search.css";

const Search = () => {
  const { typing, searchInputValue, handleChange, clearSearch } =
    useContext(EventContext);
  return (
    <div>
      <div className="search-container">
        <div className="search-ccc">
          <div className="input-div">
            <input
              type="text"
              placeholder="Type to search..."
              name="search"
              value={searchInputValue}
              onChange={handleChange}
            ></input>
            <div className="search-icons">
              <div
                className={typing ? "show-x" : "hide-x"}
                onClick={clearSearch}
              >
                <i className="fas fa-times"></i>
              </div>
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
