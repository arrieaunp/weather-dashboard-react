const DailyForecast = ({ list }) => {
  const days = [];

  list.forEach((entry) => {
    const date = new Date(entry.dt * 1000).toLocaleDateString();
    if (!days.find(d => d.date === date)) {
      days.push({
        date,
        day: new Date(entry.dt * 1000).toLocaleDateString(undefined, { weekday: 'short' }),
        icon: entry.weather[0].icon,
        main: entry.weather[0].main,
        temp_max: entry.main.temp_max,
        temp_min: entry.main.temp_min,
      });
    }
  });

  return (
    <section className="bg-gray-700 p-4 rounded-xl mt-6">
      <h3 className="text-lg font-semibold mb-3">5-Day Forecast</h3>
      <ul className="divide-y divide-gray-600 text-sm">
        {days.slice(0, 5).map((d, i) => (
          <li key={i} className="flex justify-between items-center py-2">
            <span>{d.day}</span>
            <span className="flex gap-3 items-center">
              <img src={`https://openweathermap.org/img/wn/${d.icon}.png`} className="w-5" alt={d.main} />
              <span>{d.main}</span>
              <span>{Math.round(d.temp_max)}/{Math.round(d.temp_min)}°</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DailyForecast;
