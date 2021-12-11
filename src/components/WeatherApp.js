import React from 'react';

export default function WeatherApp(props) {
    const dayMonthYear = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octorber", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday"]

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear()
        return `${day}${date} ${month} ${year} `
    }
    return (

        <div className="list">
            {(props.weather.main) ? (<div>
                <div className='weathers'>
                    <div className="city">{props.city},{props.country}</div>
                    <div className="date">{dayMonthYear(new Date())}</div>
                </div>
                <div className="main">
                    <div className="temp">{props.temp}°C</div>

                    <div className="weather">{props.main}</div>
                </div>
            </div>) : ''}
        </div>

    );
}

