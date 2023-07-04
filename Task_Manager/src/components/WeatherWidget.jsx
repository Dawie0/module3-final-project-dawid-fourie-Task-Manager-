/* eslint react/prop-types: 0 */
import { useState, useEffect } from "react"

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null)
    const apiKey = '61c8b18049273a3f9871a4040f010efd'

    useEffect(() => {
        getCity()
            .then((cityName) => fetchWeatherData(cityName))
            .then((data) => {
                setWeatherData(data)
            })
            .catch((error) => {
                console.error('Failed to fetch weather data', error)
            })
    }, [])

    const getCity = () => {
        return new Promise((resolve, reject) => {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const latitude = position.coords.latitude
                    const longitude = position.coords.longitude
                    const geocodingUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey}`

                    fetch(geocodingUrl)
                        .then((response) => response.json())
                        .then((data) => {
                            const cityName = data[0].name
                            console.log(cityName)
                            resolve(cityName)
                        })
                        .catch((error) => {
                            console.error('Error retrieving city name:', error)
                            reject(error)
                        })
                },
                (error) => {
                    console.error('Error retrieving location:', error)
                    reject(error)
                }
                )
            }   else {
                console.log('Geolocation is not supported by this browser.')
                reject(new Error('Geolocation not supported'))
            }
        })
    }

    const fetchWeatherData =  async (city) => {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' +
                city +
                '&appid=' + apiKey +
                '&units=imperial')
            
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`)
            }
    
            const data = await response.json()
            return data
        }
        catch (error) {
            console.log(`Could not get data: ${error}`)
        }        
    }
    


    return (
        <div className="weather-widget">
            {weatherData && (
        <>
          <div className="city-name">{weatherData.name}</div>
          <div className="weather-details">
            <div className="temperature">
              {Math.round(weatherData.main.temp)}°C
            </div>
            <div className="weather-icon">
              <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
            </div>
          </div>
          <div className="weather-description">
            {weatherData.weather[0].description}
          </div>
        </>
      )}
    </div>
  )
}

export default Weather