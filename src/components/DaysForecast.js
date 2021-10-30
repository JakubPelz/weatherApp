import React, { useState, useEffect } from 'react';
import { second_api_key } from './config2.json';
import { useSelector } from 'react-redux';
import moment from 'moment';

const DaysForecast = () => {
    const [finalData, setFinalData] = useState([]);
    const weather = useSelector(state => state.weather)
    const longtitude = weather.data === null ? 17.25 : weather.data.coord.lon;
    const latitude = weather.data === null ? 49.59 : weather.data.coord.lat;

    const fetchData = () => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&exclude=hourly,minutely,alerts&units=metric&appid=${second_api_key}`)
            .then((res) => res.json())
            .then((data) => {
                setFinalData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    //get OUT
    //console.log(finalData)
    //console.log(finalData.daily === undefined ? '' : finalData.daily.length)

    // ADD if else state
    return (
        <div className="future-forecast">
            {finalData.daily === undefined ? ('We are loading data from server ...') : (
                <>
                    {finalData.daily.map((day, idx) => (
                        <div className="weather-forecast" key={idx}>
                        <div className="weather-forecast-item">
                            <div className="day">{moment(day.dt * 1000).format('dddd')}</div>
                            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="weather icon" className="w-icon" />
                            <div className="temp">{day.temp.night}&#176;C</div>
                            <div className="temp">{day.temp.day}&#176;C</div>
                        </div>
                    </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default DaysForecast