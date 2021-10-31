import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);


    return (
        <div>
            <div className="time">
                {`${dateTime.toLocaleDateString()}`}
            </div>
            <div className="date">
                {`${dateTime.toLocaleTimeString()}`}
            </div>
        </div>   
    )
};

export default Clock;