import React from 'react'
import { useSelector } from 'react-redux';

const TimeZone = () => {
    const weather = useSelector(state => state.weather)
   
    return (
                <div className="place-container">
                    <div className="time-zone">{weather.data === null ? 'Internet connection lost' : weather.data.name}<span style={{ fontSize: "bolt" }}> {weather.data === null ? '' : weather.data.sys.country}</span></div>
                    <div className="country">Latitude is:{weather.data === null ? '' : Math.round(weather.data.coord.lat * 100) / 100}</div>
                    <div className="country">Longitude is: {weather.data === null ? '' : Math.round(weather.data.coord.lon * 100) / 100}</div>
                </div>
    );
};


export default TimeZone