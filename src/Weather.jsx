import { useState } from 'react'
//import { axios } from 'axios'

import clearSkyImage from "./assets/sun-weather-svgrepo-com.svg"
import cloudsImage2 from "./assets/cloudy-pixelated-svgrepo-com.svg"
import rainImage2 from "./assets/rain-storm-svgrepo-com.svg"
import thunderImage2 from "./assets/storm-svgrepo-com.svg"
import snowImage from "./assets/snowy-weather-svgrepo-com.svg"


const API_KEY = "5fedf2c96306f7506f5b58fdf96f4a02"

function Weather() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)

    const getWeather = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            )
            const data = await response.json();
            setWeather(data)
        } catch {
            alert('City not found')
        }
    }

    const getWeatherImage = () => {
        const desc = weather.weather[0].description
        switch (desc) {

            case 'clear sky':
            case 'few clouds':

                return clearSkyImage;

            case 'scattered clouds':
            case 'broken clouds':
            case 'overcast clouds':
                return cloudsImage2;

            case 'light rain':
            case 'moderate rain':
            case 'heavy intensity rain':
            case 'very heavy rain':
            case 'extreme rain':
            case 'freezing rain':
            case 'light intensity shower rain':
            case 'shower rain':
            case 'heavy intensity shower rain':
            case 'ragged shower rain':
                return rainImage2

            case 'thunderstorm':
            case 'thunderstorm with light rain':
            case 'thunderstorm with rain':
            case 'thunderstorm with heavy rain':
            case 'light thunderstorm':
            case 'heavy thunderstorm':
            case 'ragged thunderstorm':
            case 'thunderstorm with light drizzle':
            case 'thunderstorm with drizzle':
            case 'thunderstorm with heavy drizzle':
                return thunderImage2

            case 'snow':
            case 'light snow':
            case 'heavy snow':
            case 'light shower snow':
            case 'shower snow':
                return snowImage;


            case 'light rain and snow':
            case 'rain and snow':
                return snowImage;

            default:
                return null;

        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={getWeather}>Search</button>

            {weather != null && (
                <div className="weather-info">
                    <h2>{weather.name}</h2>
                    <img
                        src={getWeatherImage()}
                        alt="Weather condition"
                        className="weather-image"
                    />
                    <p>{weather.weather[0].description}</p>
                    <p>Temperature: {weather.main.temp}°C</p>
                </div>
            )}
        </div>
    )
}

export default Weather