import React from 'react';

const Today = () => {
    return (
        <div className="today" id="current-temp">
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon" />
            <div className="day">Monday</div>
            <div className="temp">Night - 25.6&#176; C</div>
            <div className="temp">Day - 35.6&#176; C</div>
        </div>
    )
}

export default Today