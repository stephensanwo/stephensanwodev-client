import React, { useState } from "react";
import "../styles/components.scss";
import {
  Search24,
  Close24,
  Search16,
  Close16,
  Search32,
  Close32,
} from "@carbon/icons-react";

const SearchBox = ({
  size,
  placeholder,
  setSearchData,
  searchData,
  onInput,
}) => {
  console.log(searchData);
  return (
    <div className="search-box-container">
      <input
        className={`search-box-${size}`}
        type="text"
        placeholder={placeholder}
        value={searchData}
        onInput={onInput}
      ></input>

      {searchData.length === 0 ? (
        <div className={`search-icon-${size}`}>
          {size === "small" ? (
            <Search16 fill="#0f62fe" />
          ) : size === "medium" ? (
            <Search24 fill="#0f62fe" />
          ) : (
            <Search32 fill="#0f62fe" />
          )}
        </div>
      ) : (
        <div
          className={`search-icon-${size} search-icon-close`}
          onClick={() => setSearchData("")}
        >
          {" "}
          {size === "small" ? (
            <Close16 fill="#ffffff" />
          ) : size === "medium" ? (
            <Close24 fill="#ffffff" />
          ) : (
            <Close32 fill="#ffffff" />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
