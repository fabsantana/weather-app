import React from 'react';
import { DropdownMenu } from 'radix-ui';
import WeekdayDropdown from '../WeekdayDropdown/WeekdayDropdown.jsx';
import { WeatherDataContext } from '../WeatherDataProvider/WeatherDataContext';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

function HourlyForecastSection() {
  const { dailyWeatherDate, hourlyTime, hourlyTemp, hourlyWeatherCode } =
    React.useContext(WeatherDataContext);

  const todayISO = new Date().toISOString().slice(0,10);
  const initialDay = dailyWeatherDate.find(date => date === todayISO) || dailyWeatherDate[0] || '';
  
  const [selectedDay, setSelectedDay] = React.useState(initialDay);

  React.useEffect(() => {
    if (dailyWeatherDate.length) {
      const today = new Date().toISOString().slice(0,10);
      const found = dailyWeatherDate.find(date => date === today) || dailyWeatherDate[0];
      setSelectedDay(found)
    }
  }, [dailyWeatherDate])

  const hourlyDataForDay = hourlyTime
    .map((time, idx) => ({
      time,
      temp: hourlyTemp[idx],
      code: hourlyWeatherCode[idx],
    }))
    .filter((hour) => {
      if (!hour.time.startsWith(selectedDay)) return false;
      const hourNum = new Date(hour.time).getHours();
      return hourNum >= 15 && hourNum <= 22;
    });

  return (
    <div className='bg-neutral-800 p-6 rounded-3xl mt-6'>
      <div className='flex justify-between items-center'>
        <span className='text-preset-5'>Hourly Forecast</span>
        <WeekdayDropdown
          days={dailyWeatherDate}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </div>
      <div className='flex flex-col gap-4 pt-4'>
        {hourlyDataForDay.map((hour, idx) => (
          <div className='flex justify-between bg-neutral-700 border border-neutral-600 rounded-lg items-center px-3' key={idx}>
            <div className='flex items-center gap-2.5'>
              <WeatherIcon className='w-14' variant={hour.code}/>
              <span className='text-preset-5-med'>{new Date(hour.time).toLocaleTimeString('en-US', {hour: 'numeric', hour12: true})}</span>
            </div>
            <span className='text-preset-7'>{Math.round(hour.temp)}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecastSection;
