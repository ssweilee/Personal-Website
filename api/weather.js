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
  let userIP = req.query.ip || req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
  console.log("Received IP:", userIP);
  if (req.method === 'GET') {
    
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${userIP}`, { mode: 'cors' });
      const data = await response.json();
      console.log("Weather API Response:", data);
      res.json(data);
  } catch (error) {
      console.error('Error fetching weather data:', error);
      res.status(500).json({ error: 'An error occurred while fetching weather data' });
  }
  } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;

