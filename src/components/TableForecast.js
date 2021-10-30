import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

const TableForecast = () => {
    const forecast = useSelector(state => state.forecast)
    console.log(forecast)
    return (
        <div className="table">
            {forecast.data === null ? ('We are loading data from server ...') : (
                <>
                    <>
                        {/*  <th>Date</th>
                            <th>Night</th>
                            <th>Day</th>
                            <th>Sunrise</th>
                            <th>Sunset</th> */}
                        {forecast.data.daily.map((day, idx) => {
                            return (
                                <table>
                                    <thead>
                                        <tr>
                                            <th key={idx}>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td key={idx}>{moment(day.dt * 1000).format('dddd')}</td>
                                        </tr>
                                    </tbody>

                                </table>
                            )
                        })}
                    </>
                </>
            )}
        </div>
    )
}

export default TableForecast
