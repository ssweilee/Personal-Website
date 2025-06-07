import { useState, useEffect } from "react"

function Weather () {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    

    const [userIP, setUserIP] = useState(null);

    useEffect(() => {
        fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const { latitude, longitude } = data;
        console.log("User latitude:", latitude, "longitude:", longitude);

        // 2. 用經緯度去後端查天氣
        const API_URL =
          process.env.NODE_ENV === "development"
            ? `http://localhost:3000/api/weather?lat=${latitude}&lon=${longitude}`
            : `https://personal-website-b0jyned55-ssweilees-projects.vercel.app/api/weather?lat=${latitude}&lon=${longitude}`;

        return fetch(API_URL);
      })
      .then((res) => res.json())
      .then((weatherData) => {
        console.log("Weather data:", weatherData);
        setWeatherData(weatherData);
      })
      .catch((err) => {
        console.error("Error fetching weather or location:", err);
        setError(err);
      });
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