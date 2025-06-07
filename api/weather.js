import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PORT = process.env.WEATHER_PORT || 3000;
const apikey = process.env.WEATHER_API_KEY;

app.get('/api/weather', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const query = lat && lon ? `${lat},${lon}` : '51.4545,-2.5879'; 

    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${query}&aqi=no`
    );
    const data = await response.json();
    console.log("Fetched weather for location:", query, data.location);
    res.json(data);
  } catch (error) {
    console.error('Weather API error:', error);
    res.status(500).json({ error: 'Failed to fetch weather' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;

