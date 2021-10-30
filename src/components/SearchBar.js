import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from './store/actions/weatherActions';
import * as BiIcons from "react-icons/bi";
import Cities from './data/state.capitals.json';

const SearchBar = () => {
    const searchCity = Cities;
    const [term, setTerm] = useState('')
    const [searchResults, setSearchResults] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeather('Olomouc'));
    }, [dispatch]);

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(getWeather(term));
    };
    //Search State.json and filter 

    console.log(searchCity)
    console.log(term) 

    return (
        <>
            <form className="search-box" onSubmit={onSubmit}>
                <input className="search-txt" type="text" placeholder="Search your City..." value={term} onChange={(event) => setTerm(event.target.value)} />
                <button className="search-btn" onSubmit={onSubmit}>
                    <BiIcons.BiSearchAlt />
                </button>
                {searchCity.filter((city) => {
                 if (term == '') {
                     return city
                 } else if (city.name.toLowerCase().includes(term.toLowerCase())) {
                     return city
                 }
                }).map((city, key) => {
                return <p key={key}>{city.name}</p>
                })}
            </form>
        </>
    )
}

export default SearchBar;
