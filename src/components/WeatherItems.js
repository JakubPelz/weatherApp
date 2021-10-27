import React from 'react';

import Humidity from './WeatherItems/Humidity';
import Pressure from './WeatherItems/Pressure';
import WindSpeed from './WeatherItems/WindSpeed';

const WeatherItems = () => {
    return (
        <div className="others" id="current-weather-items">
            <Humidity />
            <Pressure />
            <WindSpeed />           
        </div>
    )
}

export default WeatherItems;