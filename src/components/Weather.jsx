import { useState, useEffect } from "react"

function Weather () {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    const API_URL = process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api/weather"
    : "https://personal-website-b0jyned55-ssweilees-projects.vercel.app/api/weather"

    useEffect(() => {
        fetch(API_URL)
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
                        <div className="img">
                            <img src={weatherData.current.condition.icon} alt="Weather Icon" />
                        </div>
                        <p>{weatherData.current.temp_c}˚C</p>
                    </div>
                )}
                {error && <p>Error fetching data: {error.message}</p>}
        </div>
    )
}

export default Weather