import React from 'react'
import ButtonTable from './ButtonTable'

const TimeZone = () => {
    return (
        <div className="place-container">
            <div className="time-zone" id="time-zone">Mid Europe</div>
            <div id="country" className="country">Czech</div>
            <ButtonTable />
        </div>
    )
}

export default TimeZone