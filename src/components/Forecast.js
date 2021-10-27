import React from 'react';

import Today from './Forecast/Today';
import OtherDay from './Forecast/OtherDay';

const Forecast = () => {
    return (
            <div className="future-forecast">
                <Today />
                <OtherDay />
            </div>

    )
}

export default Forecast
