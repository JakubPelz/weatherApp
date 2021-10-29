import React, { useEffect } from 'react';
import { openweathermap_api_key } from './config.json';
import { useSelector } from 'react-redux';

const DaysForecast = () => {
    useEffect(() => {
        fetchDays();
    })
    const weather = useSelector(state => state.weather)
    const longtitude = weather.data === null ? 17.25 : weather.data.coord.lon;
    const latitude = weather.data === null ? 49.59 : weather.data.coord.lat;
    console.log(longtitude, latitude)

    const fetchDays = async () => {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&exclude=hourly,minutely,alerts&units=metric&appid=${openweathermap_api_key}`);
        const finalData = await data.json();
        console.log(finalData)
        return finalData;
    }
    return (
        <div className="future-forecast">
            <div className="today" id="current-temp">
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon" />
                <div className="day">Monday</div>
                <div className="temp">Night - 25.6&#176; C</div>
                <div className="temp">Day - 35.6&#176; C</div>
            </div>
            <div className="weather-forecast" id="weather-forecast">
                <div className="weather-forecast-item">
                    <div className="day">Thuesday</div>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" className="w-icon" />
                    <div className="temp">Night - 25.6&#176; C</div>
                    <div className="temp">Day - 35.6&#176; C</div>
                </div>
            </div>
        </div>
    )
}

export default DaysForecast