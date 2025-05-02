const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeatherData(city) {
  if (!city) throw new Error("City is required");
  const cityRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );
  const cityData = await cityRes.json();

  if (!cityRes.ok || !cityData.coord) throw new Error("City not found");

  const forecastRes = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${cityData.coord.lat}&lon=${cityData.coord.lon}&units=metric&appid=${apiKey}`
  );
  const forecastData = await forecastRes.json();

  return {
    city: cityData.name,
    country: cityData.sys.country,
    current: cityData.main,
    weather: cityData.weather?.[0],
    wind: cityData.wind,
    list: forecastData.list,
  };
}
