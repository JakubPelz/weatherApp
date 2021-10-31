import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from './store/actions/weatherActions';

//icons
import * as BiIcons from "react-icons/bi";

const SearchBar = ({ placeholder, data }) => {
    const [filtredData, setFiltredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeather('Olomouc'));
    }, [dispatch]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === '') {
            setFiltredData([]);
        } else {
            setFiltredData(newFilter);
            setWordEntered(searchWord);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(getWeather(wordEntered));
    };

    const clearInput = () => {
        setFiltredData([]);
        setWordEntered('');
    };

    return (
        <div className="search">
            <form onSubmit={onSubmit}>
                <div className="searchInputs">
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={wordEntered}
                        onChange={handleFilter}
                    />
                    <div className="searchIcon">
                        {filtredData.length === 0 ? (
                            <BiIcons.BiSearchAlt onSubmit={onSubmit} />
                        ) : (
                            <BiIcons.BiXCircle id="clearBtn" onClick={clearInput} />
                        )}
                    </div>
                </div>
            </form>
            {filtredData.length !== 0 && (
                <div className="dataResult">
                    {filtredData.slice(0, 15).map((value, key) => {
                        return (
                            <p className="dataItem" key={key}>
                                {value.name}
                            </p>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchBar;
