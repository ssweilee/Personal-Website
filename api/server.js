import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import weatherRouter from './weather.js';
import contactRouter from './contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/weather', weatherRouter);
app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
