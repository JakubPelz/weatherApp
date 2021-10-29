import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';

const WeatherItems = () => {
    const weather = useSelector(state => state.weather)

    return (
        <div className="others" id="current-weather-items">
            <div className="weather-item">
                <div>Humidity</div>
                <div>{weather.data === null ? '' : weather.data.main.humidity}<span>%</span></div>
            </div>
            <div className="weather-item">
                <div>Pressure</div>
                <div>{weather.data === null ? '' : weather.data.main.pressure}</div>
            </div>
            <div className="weather-item">
                <div>Wind Speed</div>
                <div>{weather.data === null ? '' : weather.data.wind.speed}</div>
            </div>
            <div className="weather-item">
                <div>Sunrise</div>
                <div>{weather.data === null ? '' : moment(weather.data.sys.sunrise * 1000).format('HH:mm a')}</div>
            </div>
            <div className="weather-item">
                <div>Sunset</div>
                <div>{weather.data === null ? '' : moment(weather.data.sys.sunset * 1000).format('HH:mm a')}</div>
            </div>
        </div>
    )
}

export default WeatherItems