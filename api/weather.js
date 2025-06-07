import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors({
  origin: '*', 
  methods: ['GET'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PORT = process.env.WEATHER_PORT || 3000;
const apikey = process.env.WEATHER_API_KEY;

app.get('/api/weather', async (req, res) => {
  try {
    const query = "Bristol"; // 或者你想要的任何城市名
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${encodeURIComponent(query)}&aqi=no`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Weather API error:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;

