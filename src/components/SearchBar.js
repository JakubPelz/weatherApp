import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from './store/actions/weatherActions';
import * as BiIcons from "react-icons/bi";



const SearchBar = () => {
    const [term, setTerm] = useState('')
    const dispatch = useDispatch();
    
    useEffect(() => { 
        dispatch(getWeather('Olomouc'));
    }, [dispatch]); 

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(getWeather(term));
    };

    return (
        <>
            <form className="search-box" onSubmit={onSubmit}>
                <input className="search-txt" type="text" placeholder="Search your City..." value={term} onChange={(event) => setTerm(event.target.value)} />
                <button className="search-btn" onSubmit={onSubmit}>
                    <BiIcons.BiSearchAlt />
                </button>
            </form>
        </>
    )
}

export default SearchBar;
