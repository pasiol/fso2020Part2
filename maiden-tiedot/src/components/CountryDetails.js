import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetails = ({country}) => {
    console.log('Component Country props:', country);
    const [ temperature, setTemperature] = useState("")
    const [ icon, setIcon ] = useState("")
    const [ windSpeed, setWindSpeed ] = useState("")
    const [ windDirection, setWindDirection ] = useState("")
    const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}&units=m`
    console.log("weatherURL: ", weatherURL)

    const hook = () => {
        console.log("CountryDetails effect")
        axios
            .get(weatherURL)
            .then(response => {
                console.log("CountryDetails promise fulfilled")
                console.log(response.data)
                setTemperature(response.data.current.temperature)
                setIcon(response.data.current.weather_icons[0])
                setWindSpeed(response.data.current.wind_speed)
                setWindDirection(response.data.current.wind_dir)
            })
    
    }

    useEffect(hook, [])

    return (
        <React.Fragment>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <strong>languages</strong>
            <ul>
                {country.languages.map((language) => 
                    <li key={language.name}>{language.name}</li>
                )}
            </ul>
            <img src={country.flag} alt="country flag" height="100" />
                <h2>Weather in {country.capital}</h2>
                <p><strong>temperature: </strong>{temperature} Celsius</p>
                <img src={icon} alt="weather icon" />
                <p><strong>wind: </strong>{windSpeed} km/h direction {windDirection}</p>
        </React.Fragment>
    )
}

export default CountryDetails