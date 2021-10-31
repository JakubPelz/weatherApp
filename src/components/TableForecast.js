import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

const TableForecast = () => {
    const forecast = useSelector(state => state.forecast)
    return (
        <div className="table">
            {forecast.data === null ? ('We are loading data from server ...') : (
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Day Temp.</th>
                            <th>Night Temp.</th>
                            <th>Humidity</th>
                            <th colspan="2">Picker Forecast</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forecast.data.daily.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td key={item.id}>{moment(item.dt * 1000).format('L')}</td>
                                    <td key={item.id}>{item.temp.day}&#176;C</td>
                                    <td key={item.id}>{item.temp.night}&#176;C</td>
                                    <td key={item.id}>{item.humidity} <span>%</span></td>
                                    <td key={item.id}>{item.weather[0].main}</td>
                                    <td key={item.id}><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather icon" className="w-icon" style={{width:"40px", height:"40px"}}/></td>
                                </tr>                               
                            )
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default TableForecast
