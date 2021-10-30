import React, { useEffect,useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { getForecast } from './store/actions/forecastActions';

const DaysForecast = () => {
    const dispatch = useDispatch();
    
    const forecast = useSelector(state => state.forecast);
    const weather = useSelector(state => state.weather);
    const longtitude = weather.data === null ? 17.25 : weather.data.coord.lon;
    const latitude = weather.data === null ? 49.59 : weather.data.coord.lat;

    const fetchData = useCallback(() => {
        if (longtitude && latitude) dispatch(getForecast(latitude, longtitude));
        }, [latitude, longtitude]);// eslint-disable-line react-hooks/exhaustive-deps

        useEffect(() => {
        fetchData();
        }, [fetchData]);
     
    return (
        <div className="future-forecast">
            {forecast.data === null ? ('We are loading data from server ...') : (
                <>
                    {forecast.data.daily.map((day, idx) => {
                        if (idx === 0) {
                            return (
                                <div className="weather-forecast" key={idx}>
                                    <div className="today">
                                        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`} alt="weather icon" className="w-icon" />
                                        <div className="other">
                                            <div className="day">{moment(day.dt * 1000).format('dddd')}</div>
                                            <div className="temp">Night - {day.temp.night}&#176;C</div>
                                            <div className="temp">Day - {day.temp.day}&#176;C</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="weather-forecast" key={idx}>
                                    <div className="weather-forecast-item">
                                        <div className="day">{moment(day.dt * 1000).format('dddd')}</div>
                                        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="weather icon" className="w-icon" />
                                        <div className="temp">Night - {day.temp.night}&#176;C</div>
                                        <div className="temp">Day - {day.temp.day}&#176;C</div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </>
            )}
        </div>
    )
}

export default DaysForecast