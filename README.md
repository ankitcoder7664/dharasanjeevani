# Dhara Sanjeevani – Smart Agri-Farm Management System

> **Tagline**: *Smarter Farming. Healthier Harvests.*

**Dhara Sanjeevani** is a production-quality, smart agriculture web platform engineered for modern farmers. It combines real-time IoT sensor telemetry, Raspberry Pi Edge AI crop disease diagnostics, OpenWeather micro-climate forecasting, smart drip irrigation logic, and precision NPK fertilizer management into a farmer-friendly dashboard.

---

## 🌟 Key Features

1. **Brand & Modern Agriculture UI**:
   - Agriculture-inspired Leaf + Water + Soil logo and custom green palette (`#1b4332`, `#2d6a4f`, `#52b788`).
   - Clear status badges (`Optimal`, `Normal`, `Warning`, `Critical`) with farmer-friendly terminology tooltips.

2. **Interactive 3D Digital Twin**:
   - Three.js lightweight 3D farm scene featuring crop fields, soil stratum layers, drip irrigation lines, floating water droplets, ESP32 telemetry poles, and Raspberry Pi Edge AI compute nodes.

3. **8 Large Field Monitoring Cards**:
   - Soil Moisture (62% Optimal)
   - Rain Level (12 mm Today)
   - Temperature (28°C)
   - Air Humidity (64%)
   - Water Tank Level (74% Healthy - 7,400 L / 10,000 L)
   - Crop Growth Index (78%)
   - Soil pH (6.7 Suitable)
   - NPK Compound Balance (N: 42, P: 28, K: 36 mg/kg)

4. **Weather Forecast & Farming Intelligence**:
   - Live weather integration via OpenWeather API (or realistic fallback demo data).
   - 7-day agricultural outlook with daily max/min temperatures, rain probability, expected rainfall in mm, and custom agronomist tips.
   - 24-hour hourly precipitation timeline.
   - Weather + Soil multi-variable recommendation engine.

5. **Raspberry Pi Edge AI Crop Health Diagnostics**:
   - Live ESP-CAM vision stream simulation with Tensor bounding boxes overlay.
   - LiDAR 3D Canopy height & volume scanner (68.4 cm height, 84% canopy density).
   - MQ-series environmental gas array (CO2, VOCs, Ammonia).
   - Neural network diagnosis summary.

6. **Precision Irrigation & Fertilizer Management**:
   - Automated Decision Matrix ("Not Required - Soil moisture optimal & rain expected").
   - 1.5 HP Submersible Pump manual & automatic controls with safety confirmation dialogs and timer selectors.
   - Granular NPK Spreader actuator with dosage sliders.
   - Historical water consumption bar charts.

7. **Hardware Fleet & System Architecture**:
   - Full status monitoring for ESP32, Raspberry Pi 4, ESP-CAM, LiDAR, MQ Sensors, 4-Channel Relays, Pump, and Spreader.
   - Visually engaging 6-step interactive system architecture flowchart.
   - C++ Arduino telemetry code snippet generator for physical ESP32 boards.

8. **Demo Mode & Interactive Simulator**:
   - Dynamic real-time telemetry simulator allowing judges to drag sliders (Moisture, Temp, Humidity, Tank) to watch UI reactions live!

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

### Installation

```bash
# 1. Clone or navigate to project directory
cd stitch_dhara_sanjeevani_smart_farming

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The application will launch locally at `http://localhost:3000`.

---

## 🔑 Weather API Key Configuration

To connect live real-world weather data:

1. Obtain a free API Key from [OpenWeatherMap](https://openweathermap.org/api).
2. Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_openweather_api_key_here
```

3. Alternatively, enter the key directly in the **Settings** or **Weather** page UI.
4. If no API key is provided, Dhara Sanjeevani automatically uses calibrated, realistic fallback demo weather data.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Agri Design Tokens
- **Icons**: Lucide React
- **Charts**: Recharts
- **3D Graphics**: Three.js WebGL Renderer
- **Effects**: Canvas Confetti
- **State Management**: React Context (`FarmContext`) + Modular Services

---

## 📜 License

Created for **Dhara Sanjeevani Smart Farming Ecosystem**.
