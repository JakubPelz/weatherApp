import React from 'react'
import ButtonTable from './ButtonTable';

const KEY = '01ee1c02a5f0d8f2e86d86a0ee732df8';

class TimeZone extends React.Component {
    constructor(){
        super();
        this.state = {
            city: undefined,
            country: undefined
        };
        this.getWeather();
    }
    
    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${KEY}`)

        const response = await api_call.json();

        console.log(response);
    }
 
    render() {
        return (
            <div className="place-container">
                <div className="time-zone" id="time-zone"> nic</div>
            <div id="country" className="country">nic</div>
                <ButtonTable />
            </div>
        )
    }
}

export default TimeZone