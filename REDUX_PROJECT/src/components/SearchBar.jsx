import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/slice/searchSlice";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [search, setsearch] = useState("");
const navigate = useNavigate();
  function SubmitHandler(e) {
    e.preventDefault();
    dispatch(setQuery(search));
    // setsearch("");
  }

  const dispatch = useDispatch();
  return (
    <div>
      <form
        onSubmit={function (e) {
          SubmitHandler(e);
        }}
        className="form"
      >
        <input
          type="text"
          value={search}
          id="search-input"
          required
          onChange={function (e) {
            setsearch(e.target.value);
          }}
          placeholder="Search Anything"
        />
        <button id="search-button">Search</button>
        <button id="collection-button"
          onClick={function(){
            navigate('/collections')
          }}
        >Collections</button>
      </form>
    </div>
  );
};

export default SearchBar;
