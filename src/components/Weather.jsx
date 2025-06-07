import { useState, useEffect } from "react"

function Weather () {
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    

    const [userIP, setUserIP] = useState(null);

    useEffect(() => {
        fetch("https://api.ipify.org?format=json") 
            .then(response => response.json())
            .then(data => {
                setUserIP(data.ip);
                console.log("User IP:", data.ip); 
            })
            .catch(error => console.error("Error fetching IP:", error));
    }, []);

    useEffect(() => {
        if (!userIP) return; 
        const API_URL = process.env.NODE_ENV === "development"
            ? `http://localhost:3000/api/weather?ip=${userIP}`
            : `https://personal-website-b0jyned55-ssweilees-projects.vercel.app/api/weather?ip=${userIP}`;

        fetch(API_URL)
            .then(response => response.json())
            .then(data => setWeatherData(data))
            .catch(error => {
                setError(error);
                console.error(error);
            });
    }, [userIP]);
    

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