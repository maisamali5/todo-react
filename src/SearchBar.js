import React, { useState } from "react";
import "./App.css";

const SearchBar = ({ searchVal, blogs }) => {
  const [search, setSearch] = useState("");
/*
setDataArray(
...dataArray,      ...(spread operator)
{title:search,id:dataArray.length+1}
)
*/
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searchBox">
      <input
        type="text"
        id="search"
        placeholder="Enter Data"
        value={search}
        onChange={handleChange}
      />
      <button onClick={() => searchVal(search)}>Add</button>
    </div>
  );
};
export default SearchBar;
