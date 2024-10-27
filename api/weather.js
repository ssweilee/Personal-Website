import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
          ? 'https://personal-website-lyart-mu.vercel.app' 
          : 'http://localhost:3000',
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

