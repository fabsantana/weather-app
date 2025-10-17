import React from 'react';
import { WeatherDataContext } from '../WeatherDataProvider/WeatherDataContext';
import Card from '../Card/Card';

function DailyForecastSection() {
  const { dailyWeatherCode, dailyWeatherDate, dailyHighTemp, dailyLowTemp } =
    React.useContext(WeatherDataContext);

  const dailyWeatherCards = dailyWeatherDate.map((date, idx) => ({
    date,
    code: dailyWeatherCode[idx],
    high: dailyHighTemp[idx],
    low: dailyLowTemp[idx],
  }));

  return (
    <div className='text-left pt-8'>
      <span className='text-preset-5 text-neutral-000'>Daily Forecast</span>
      <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-5 pt-8'>
        {dailyWeatherCards.map((day, idx) => {
          const dateObj = new Date(day.date);
          const weekday = dateObj.toLocaleDateString('en-US', {
            weekday: 'short',
          });
          return (
            <Card
              key={idx}
              variant='daily-data'
              label={weekday}
              highTemp={day.high}
              lowTemp={day.low}
              dailyWeatherCode={day.code}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DailyForecastSection;
