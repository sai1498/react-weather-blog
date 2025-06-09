import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "../utils/weather-api";

const WeatherForecast = () => {
  const city = "Delhi";
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getWeather() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchWeatherData(city);
        setWeather(data);
      } catch (err) {
        setError(err.message || "Failed to load weather data");
      } finally {
        setLoading(false);
      }
    }
    getWeather();
  }, []);

  if (loading) return <div>Loading weather...</div>;

  if (error)
    return (
      <div
        style={{
          color: "red",
          padding: "1rem",
          background: "#ffeaea",
          borderRadius: "8px",
        }}
      >
        <strong>Error:</strong> {error}
      </div>
    );

  if (!weather) return <div>No weather data available</div>;

  // The structure depends on the actual API response
  // Adjust keys here after you see your actual response in console
  return (
    <div style={{ padding: "1rem", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h2>Current Weather in {city}</h2>
      <p>Temperature: {weather.temperature ?? "N/A"} °C</p>
      <p>Humidity: {weather.humidity ?? "N/A"} %</p>
      <p>Condition: {weather.weather_desc ?? "N/A"}</p>

      <h4>Raw JSON response:</h4>
      <pre
        style={{ background: "#f4f4f4", padding: "1rem", fontSize: "0.9rem" }}
      >
        {JSON.stringify(weather, null, 2)}
      </pre>
    </div>
  );
};

export default WeatherForecast;
