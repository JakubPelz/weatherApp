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
                <div className="date-container">
                    <Clock />
                    <WeatherItems />
                </div>
                <div className="current-info">
                    <div className="date-container">
                        <SearchBar data={CitiesData} placeholder="Type your City..." />
                    </div>
                </div>
                <div className="current-info">
                    <div className="date-container">
                        <TimeZone />
                        <div className="button-center">
                            <button className="btn-1" onClick={() => setShow(!show)}>Table Forecast</button>
                        </div>
                    </div>
                    <div className="current-info">
                        <div className="table-position">
                            {
                                show ? null : <TableForecast />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Index;