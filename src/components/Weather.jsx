import { useState, useEffect } from "react"

const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:3000/api';

function Weather () {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`${apiBaseUrl}/weather`)        
        .then(response => response.json())
        .then(data => {
            setWeatherData(data)
            console.log(data)
        })
        .catch (err => {
            setError(err)
            console.error(err)
        })
    }, [])
    

    return (
        <div className="weather-container">
                {weatherData && (
                    <div className="weather">
                        <img src={weatherData.current.condition.icon} alt="Weather Icon" />
                        <p>{weatherData.current.temp_c}˚C</p>
                    </div>
                )}
                {error && <p>Error fetching data: {error.message}</p>}
        </div>
    )
}

export default Weather