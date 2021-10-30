import React, { useState } from 'react';

// Displays the date and time for the forecast
import Clock from './Clock';
// Displays GEO zone
import TimeZone from './TimeZone';
// Search bar
import SearchBar from './SearchBar';
// Table
import TableForecast from './TableForecast';

const Index = () => {
    const [show, setShow] = useState(true)
    return (
        <div className="container">
            <div className="current-info">
                <Clock />
                <SearchBar />
                <div>
                    <TimeZone />
                    <div className="button-center">
                        <button className="btn-1" onClick={() => setShow(!show)}>Table Forecast</button>
                    </div>
                </div>
                {
                    show ? null : <TableForecast />  
                }
            </div>
        </div>
    )
}


export default Index;