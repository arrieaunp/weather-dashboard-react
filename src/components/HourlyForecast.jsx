const HourlyForecast = ({ list }) => {
  const first6 = list.slice(0, 6); // 6 ช่วงแรก (3 ชม./ช่วง = ~18 ชม.)

  return (
    <section className="bg-gray-700 p-4 rounded-xl mt-6">
      <h3 className="text-lg font-semibold mb-3">Today's Forecast</h3>
      <div className="flex gap-4 overflow-x-auto">
        {first6.map((h, i) => {
          const time = new Date(h.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const icon = `https://openweathermap.org/img/wn/${h.weather[0].icon}.png`;
          return (
            <div key={i} className="text-center min-w-[60px]">
              <p className="text-sm">{time}</p>
              <img src={icon} alt="" className="w-8 mx-auto" />
              <p className="text-lg">{Math.round(h.main.temp)}°</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HourlyForecast;
