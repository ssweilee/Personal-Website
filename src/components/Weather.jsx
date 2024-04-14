import { useState, useEffect } from "react"


function Weather () {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
    const option = {
            method: 'GET',
            headers: {
                accept: 'application/json' }}
        

        fetch('http://api.weatherapi.com/v1/current.json?key=3720cee632e4426e89254728242602&q=auto:ip', {mode: 'cors'})
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