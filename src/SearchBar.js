import React, { useState } from 'react';
import './App.css';

const SearchBar = ({searchVal, blogs}) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);

    };

    return (
        <div className="searchBox">
        <input type="text" id="search" placeholder="enter author name to search" value={search} onChange={handleChange} />
        <button onClick={()=>searchVal(search)}>search</button>
        {/* console.log(blogs); */}
        
        </div>
        <List search={search} />
    );
    
}
export default SearchBar;