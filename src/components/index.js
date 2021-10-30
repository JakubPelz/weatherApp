import React from 'react';

// Displays the date and time for the forecast
import Clock from './Clock';
// Displays GEO zone
import TimeZone from './TimeZone';
// Search bar
import SearchBar from './SearchBar';
// Table forecast "Will be on click"
import TableForecast from './TableForecast';



const Index = () => {
    return (
        <div className="container">
            <div className="current-info">
                    <Clock />
                    <SearchBar />
                    <TableForecast />
                    <TimeZone />
            </div>
        </div>
    )
}


export default Index;