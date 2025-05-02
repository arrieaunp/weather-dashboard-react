import { useState } from "react";
import MainDashboard from "./components/MainDashboard";
import { fetchWeatherData } from "./services/weatherService";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async (city) => {
    setIsLoading(true);
    try {
      const result = await fetchWeatherData(city);
      setWeatherData(result);
    } catch (err) {
      alert(`❌ ${err.message}`);
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainDashboard
      fetchWeather={fetchWeather}
      data={weatherData}
      isLoading={isLoading}
    />
  );
}

export default App;
