import React from 'react';

const WeatherCard = ({ data }) => {
  const { name, sys, main, weather, wind } = data;
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;
  const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();

  return (
    <div className="bg-white/90 shadow-xl rounded-2xl p-6 w-full max-w-md text-center">
      <h2 className="text-2xl font-bold mb-2">{name}, {sys.country}</h2>
      <img src={icon} alt={weather[0].main} className="mx-auto w-24" />
      <p className="text-gray-700 capitalize text-lg">{weather[0].description}</p>
      <p className="text-4xl font-bold text-blue-600 mt-2">{main.temp}°C</p>

      <div className="grid grid-cols-2 gap-4 text-sm mt-4 text-left text-gray-600">
        <p><span className="font-semibold">Feels like:</span> {main.feels_like}°C</p>
        <p><span className="font-semibold">Humidity:</span> {main.humidity}%</p>
        <p><span className="font-semibold">Pressure:</span> {main.pressure} hPa</p>
        <p><span className="font-semibold">Wind:</span> {wind.speed} m/s</p>
        <p><span className="font-semibold">Sunrise:</span> {sunrise}</p>
        <p><span className="font-semibold">Sunset:</span> {sunset}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
