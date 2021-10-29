import React, { useState, useEffect } from 'react';
import { second_api_key } from './config2.json';
import { useSelector } from 'react-redux';

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

    console.log(finalData)
    console.log(finalData.daily === undefined ? '' : finalData.daily.length)
    return (
        <>
         
        </>
    )
}

export default DaysForecast