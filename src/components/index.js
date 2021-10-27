import React from 'react';

// Displays the date and time for the forecast
import Date from './Date';
// Displays GEO zone
import TimeZone from './TimeZone';
// Search bar
import SearchBar from './SearchBar';

const index = () => {
    return (
        <div className="container">
            <div className="current-info">
              <Date />
              <SearchBar />
              <TimeZone />
            </div>            
        </div>
    )
}

export default index;