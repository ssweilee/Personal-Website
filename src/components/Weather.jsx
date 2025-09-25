import { useState, useEffect } from "react"

function Weather () {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);

    const API_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000/api/weather"
        : "https://personal-website-77yt3khar-ssweilees-projects.vercel.app/api/weather"

    
useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            try {
            const response = await fetch(`${API_URL}?lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
            setWeatherData(data);
            } catch (err) {
            console.error("Error fetching weather data:", err);
            setError(err);
            } finally {
            setLoading(false);
            }        
        },
      
        async (geoError) => {
            console.warn("Geolocation failed, using fallback location (Bristol).", geoError);
            try {
                const response = await fetch(`${API_URL}`);
                const data = await response.json();
                setWeatherData(data);
            } catch (err) {
            console.error("Error fetching fallback weather data:", err);
            setError(err);
            } finally {
            setLoading(false);
            }
        }
    );
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