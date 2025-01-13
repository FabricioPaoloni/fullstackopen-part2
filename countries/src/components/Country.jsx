const api_key = import.meta.env.VITE_SOME_KEY
import { useState ,useEffect } from "react"
import axios from 'axios'

const Country = ({ country }) => {
    const [countryWeather, setCountryWeather] = useState({})

    let langArray = []
    for (const language in country.languages) {
        // console.log(country.languages[language])
        langArray.push(country.languages[language])
    }

    // console.log(langArray)


    useEffect(() => {
        if(country.capital) {

            axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${api_key}`)
            .then(response => {
                setCountryWeather(response.data)
                // console.log(response.data)
            })
            .catch(error => {
                console.log('An error ocurred importing weather info.')
            })
        }
    }, [country])
    // console.log(countryWeather)

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p><b>Capital:</b> {country.capital ? country.capital[0] : null}</p>
            <p><b>Area:</b> {country.area ? country.area.toLocaleString() : null} km<sup>2</sup></p>
            <p><b>Population:</b> {country.population ? country.population.toLocaleString() : null} citizens</p>
            <ul>
                {langArray.map(language => {
                    return <li key={language}>{language}</li>
                })}
            </ul>
            <img src={country.flags.png ? country.flags.png : null} alt="" />

            {
                !country.capital ?
                <p>Capital country data is missing :/</p> :
                Object.keys(countryWeather).length === 0 ?
                    <p>Importing weather data... {}</p> :
                    <div>
                        <h3>Weather in {country.capital[0]}:</h3>
                        <p><b>Temperature:</b> {(countryWeather.main.temp - 273.15).toFixed(2)} ºC</p>
                        <img src={`https://openweathermap.org/img/wn/${countryWeather.weather[0].icon}@2x.png`} type='png' alt='logo del clima'></img>
                        <p><b>Wind:</b> {countryWeather.wind.speed} m/s</p>
                        <p><b>Humidity:</b> {countryWeather.main.humidity}%</p>
                    </div>

            }

        </div>
    )
}

export default Country