const API_KEY = import.meta.env.VITE_INDIAN_WEATHER_API_KEY;
const BASE_URL = "https://api.indianapi.in/v1/weather";

console.log("API_KEY:", API_KEY);
export async function fetchWeatherData(cityName) {
  if (!API_KEY) {
    throw new Error("Missing API key. Please check your .env file.");
  }

  try {
    const response = await fetch(
      `${BASE_URL}/daily?city=${encodeURIComponent(cityName)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
      }
    );

    // Read the response body once as text
    const responseBody = await response.text();

    if (!response.ok) {
      // Try to parse JSON error message
      let errorMessage;
      try {
        const errorData = JSON.parse(responseBody);
        errorMessage = errorData.message || "Failed to fetch weather data";
      } catch {
        errorMessage = responseBody || "Failed to fetch weather data";
      }
      throw new Error(errorMessage);
    }

    const data = JSON.parse(responseBody);
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
