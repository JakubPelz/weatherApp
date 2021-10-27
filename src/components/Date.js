import React from 'react';

import WeatherItems from './WeatherItems';

const Date = () => {
    return (
        <div className="date-container">
            <div className="time" id="time">
               time <span id="am-pm">PM</span> 
            </div>
            <div className="date" id="date">
               Monday, 1 jun
            </div> 
            <WeatherItems />
        </div>
    )
}

export default Date