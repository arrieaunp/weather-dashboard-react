const AirConditionBox = ({ current, wind }) => {
  return (
    <section className="bg-gray-700 p-4 rounded-xl mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
      <div>🌡 Real Feel: {Math.round(current.feels_like)}°</div>
      <div>💨 Wind: {wind.speed} m/s</div>
      <div>☁️ Humidity: {current.humidity}%</div>
      <div>🔽 Pressure: {current.pressure} hPa</div>
    </section>
  );
};

export default AirConditionBox;
