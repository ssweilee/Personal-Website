import { useState, useEffect } from "react"

const apiBaseUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000/api'     // Local environment
  : 'https://personal-website-lyart-mu.vercel.app/api';  // Vercel deployment

function Weather () {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://personal-website-lyart-mu.vercel.app/api/weather')
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