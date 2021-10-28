import React from 'react'
import ButtonTable from './ButtonTable';

class TimeZone extends React.Component {
    render() {
        return (
            <div className="place-container">
                <div className="time-zone" id="time-zone">city</div>
                <div id="country" className="country">nic</div>
                <ButtonTable />
            </div>
        )
    }
}

export default TimeZone