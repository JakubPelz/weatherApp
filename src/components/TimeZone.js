import React from 'react'
import ButtonTable from './ButtonTable';
import { useSelector } from 'react-redux';

const TimeZone = () => {
    const weather = useSelector(state => state.weather)
   
    return (
                <div className="place-container">
                    <div className="time-zone">{weather.data === null ? 'Pleas select a City ' : weather.data.name}<span style={{ fontSize: "bolt" }}> {weather.data === null ? '' : weather.data.sys.country}</span></div>
                    <div className="country">Latitude is:{weather.data === null ? '' : weather.data.coord.lat}</div>
                    <div className="country">Longitude is: {weather.data === null ? '' : weather.data.coord.lon}</div>
                    <ButtonTable />
                </div>
    );
};


export default TimeZone