import { useState, useRef, useEffect } from 'react';
import iconToVideoMap from '../config/iconVideoMap';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';
import AirConditionBox from './AirConditionBox';

const MainDashboard = ({ fetchWeather, data, isLoading }) => {
  const [cityInput, setCityInput] = useState('');
  const videoRef = useRef();

  const iconCode = data?.weather?.icon;
  const videoUrl = iconToVideoMap[iconCode] ?? iconToVideoMap.default;
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoUrl]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(cityInput);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
       <source src={videoUrl} type="video/mp4" />
      </video>

      {/* 🌤 Weather Dashboard */}
      <div className="relative z-10 p-6 sm:p-8 text-white bg-black/30 backdrop-blur-sm min-h-screen">
        <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
          <input
            type="text"
            className="bg-gray-700 text-white px-4 py-2 rounded-md w-full"
            placeholder="Search city..."
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
          >
            Search
          </button>
        </form>

        {isLoading ? (
          <div className="text-center mt-10 text-white text-xl animate-pulse">
            ⏳ Loading weather data...
          </div>
        ) : data && data.city && data.weather && data.current && Array.isArray(data.list) && data.list.length > 0 ? (
          <>
            <div className="flex items-center justify-between flex-wrap">
              <div>
                <h1 className="text-4xl font-bold">{data.city}, {data.country}</h1>
                <p className="text-gray-300 capitalize">{data.weather.description}</p>
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather.icon}@4x.png`}
                alt={data.weather.main}
                className="ml-auto w-24 sm:w-32 md:w-40"
              />
            </div>

            <div className="text-6xl sm:text-7xl font-extrabold my-4">
              {Math.round(data.current.temp)}°
            </div>

            <HourlyForecast list={data.list} />
            <AirConditionBox current={data.current} wind={data.wind} />
            <DailyForecast list={data.list} />
          </>
        ) : (
          <div className="text-center mt-10 text-white text-lg animate-pulse">
            🔍 Search for a city to see forecast information.
          </div>
        )}
      </div>
    </div>
  );
};

export default MainDashboard;