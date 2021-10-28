import React, { useState, useEffect } from 'react';
import WeatherItems from './WeatherItems';

const Clock = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);


    return (
        <div className="date-container">
            <div className="time">
                {`${dateTime.toLocaleDateString()}`}
            </div>
            <div className="date">
                {`${dateTime.toLocaleTimeString()}`}
            </div>
            <WeatherItems />
        </div>
    )
};

export default Clock;