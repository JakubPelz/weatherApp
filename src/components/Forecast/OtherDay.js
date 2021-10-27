import React from 'react';

const OtherDay = () => {
    return (
        <div className="weather-forecast" id="weather-forecast">
            <div className="weather-forecast-item">
                <div className="day">Monday</div>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon" />
                <div className="temp">Night - 25.6&#176; C</div>
                <div className="temp">Day - 35.6&#176; C</div>
            </div>
        </div>
    )
}

export default OtherDay