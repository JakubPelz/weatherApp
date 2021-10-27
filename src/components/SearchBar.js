import React from 'react';
import * as BiIcons from "react-icons/bi";

const SearchBar = () => {
    return (
        <div className="search-box">
            <input className="search-txt" type="text" name="" placeholder="Search your City..." />
            <a className="search-btn" href="/">
             <BiIcons.BiSearchAlt />
            </a>
        </div>
    )
}

export default SearchBar
