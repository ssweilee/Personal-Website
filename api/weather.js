import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error('Not allowed by CORS'));
        }
    }
  }));
const PORT = process.env.PORT_3000 || 3000;
const apikey = process.env.WEATHER_API_KEY;

app.get('/weather', async (req, res) => {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=auto:ip`, {mode: 'cors'});
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);

        res.status(500).json({ error: 'An error occurred while fetching weather data' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;

