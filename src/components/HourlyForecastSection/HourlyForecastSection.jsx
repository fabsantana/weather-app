import React from 'react';
import { DropdownMenu } from 'radix-ui';
import WeekdayDropdown from '../WeekdayDropdown/WeekdayDropdown.jsx';
import { WeatherDataContext } from '../WeatherDataProvider/WeatherDataContext';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

function HourlyForecastSection() {
  const { dailyWeatherDate, hourlyTime, hourlyTemp, hourlyWeatherCode } =
    React.useContext(WeatherDataContext);
  const [selectedDay, setSelectedDay] = React.useState(
    dailyWeatherDate[0] | ''
  );
  const hourlyDataForDay = hourlyTime
    .map((time, idx) => ({
      time,
      temp: hourlyTemp[idx],
      code: hourlyWeatherCode[idx],
    }))
    .filter((hour) => hour.time.startsWith(selectedDay));

  return (
    <div className='bg-neutral-800 p-6 rounded-3xl'>
      <div className='flex justify-between items-center'>
        <span className='text-preset-5'>Hourly Forecast</span>
        <WeekdayDropdown
          days={dailyWeatherDate}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </div>
      <div>
        {hourlyDataForDay.map((hour, idx) => (
          <div key={idx}>
            <div>
              <WeatherIcon variant={hour.code}/>
              <span>{new Date(hour.time).getHours()}</span>
            </div>
            <span>{Math.round(hour.temp)}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecastSection;
