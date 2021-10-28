import React from 'react'
import ButtonTable from './ButtonTable';
import { useSelector } from 'react-redux';

const TimeZone = () => {
    const weather = useSelector(state => state.weather)
   
    return (
                <div className="place-container">
                    <div className="time-zone">{/* {weather.data.name}{console.log(weather.data.name.length)} */}<span style={{ fontSize: "bolt" }}> {/* {weather.data.sys.country} */}</span></div>
                    <div className="country">Longitude is: {/* {weather.data.coord.lon} */}</div>
                    <div className="country">Latitude is:{/*  {weather.data.coord.lat} */}</div>
                    <ButtonTable />
                </div>
    );
};


export default connect()(TimeZone)