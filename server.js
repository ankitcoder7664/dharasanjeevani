import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Weather API proxy / route
app.get('/api/weather', async (req, res) => {
  const { lat, lon } = req.query;
  const apiKey = process.env.WEATHER_API_KEY || process.env.OPENWEATHER_API_KEY;

  if (!apiKey || apiKey === 'YOUR_WEATHER_API_KEY') {
    return res.status(400).json({ error: 'No WEATHER_API_KEY configured in server env' });
  }

  try {
    const currentRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);

    if (!currentRes.ok || !forecastRes.ok) {
      throw new Error('OpenWeather HTTP Error');
    }

    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();

    res.json({ current: currentData, forecast: forecastData });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch live weather data' });
  }
});

// Dhara AI Backend Route
app.post('/api/ai/chat', async (req, res) => {
  const { message, language, farmContext } = req.body;
  const apiKey = process.env.AI_API_KEY;

  if (!apiKey) {
    return res.status(400).json({ error: 'No AI_API_KEY configured in backend' });
  }

  try {
    // If Gemini or OpenAI API key provided
    const prompt = `You are Dhara AI (धरा सहायक), a farmer-friendly agricultural AI assistant for Indian farmers.
Language code: ${language}.
Answer the farmer question in a simple, practical, clear format using bullet points, emojis, and step-by-step advice.
Question: "${message}"

Current Farm Context Data:
${JSON.stringify(farmContext, null, 2)}`;

    // Mock/Generic LLM response wrapper for secure API call
    res.json({
      answer: `🌱 **धरा AI सलाह**\n\nआपकी फसल (${farmContext?.farm?.cropType || 'गेहूं'}) स्वस्थ है। मिट्टी की नमी ${farmContext?.currentSensors?.[0]?.value || 62}% है।`,
      language: language || 'hi',
      recommendations: ['Check soil moisture', 'Inspect crop leaves'],
      priority: 'low'
    });
  } catch (err) {
    res.status(500).json({ error: 'AI processing error' });
  }
});

app.listen(PORT, () => {
  console.log(`Dhara Sanjeevani Backend API running on port ${PORT}`);
});
