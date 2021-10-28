import React, { useState } from 'react';

// Displays the date and time for the forecast
import Clock from './Clock';
// Displays GEO zone
import TimeZone from './TimeZone';
// Search bar
import SearchBar from './SearchBar';


const Index = () => {
    const [city, setCity] = useState('')

    console.log(city);

    return (
        <div className="container">
            <div className="current-info">
                <Clock />
                <SearchBar onFormSubmit={setCity} />
                <TimeZone />
            </div>
        </div>
    )
}


export default Index;