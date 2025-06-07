import { useState, useEffect } from "react"

function Weather () {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    const API_URL = process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api/weather"
    : "https://personal-website-b0jyned55-ssweilees-projects.vercel.app/api/weather"

    useEffect(() => {
        if (navigator.permissions) {
            navigator.permissions.query({ name: 'geolocation' }).then(result => {
                if (result.state === 'denied') {
                    alert('Please allow location access to get your local weather.');
                }
            });
        }
        const getWeather = async () => {
          try {
            const position = await new Promise((resolve, reject) =>
              navigator.geolocation.getCurrentPosition(resolve, reject, {
                enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
              })
            );
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            console.log("User location:", lat, lon);
      
            const response = await fetch(`${API_URL}?lat=${lat}&lon=${lon}`);
            const data = await response.json();
            setWeatherData(data);
          } catch (err) {
            console.warn("Failed to get location, fallback to Bristol", err);
            try {
                const response = await fetch(`${API_URL}`);
              const data = await response.json();
              setWeatherData(data);
              console.log(data)
            } catch (fetchErr) {
              setError(fetchErr);
            }
          }
        };
      
        getWeather();
      }, []);
    

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