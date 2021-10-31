import React, { useState } from 'react';
import CitiesData from './data/city.list.json';

// Displays the date and time for the forecast
import Clock from './Clock';
import TimeZone from './TimeZone';
import SearchBar from './SearchBar';
import TableForecast from './TableForecast';
import WeatherItems from './WeatherItems';

const Index = () => {
    const [show, setShow] = useState(true)
    return (
        <div className="container">
            <div className="current-info">
             < div className="date-container">
                <Clock />
                <WeatherItems />
                <SearchBar data={CitiesData} placeholder="Type your City..." />
             </div>
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