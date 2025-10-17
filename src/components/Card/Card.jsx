import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx';
import { WeatherDataContext } from '../WeatherDataProvider/WeatherDataContext.jsx';

function Card({
  variant,
  label,
  value,
  highTemp,
  lowTemp,
  dailyWeatherCode,
  children,
}) {
  const { date, currentTemp, weatherCode } =
    React.useContext(WeatherDataContext);

  const formattedDate = date
    ? date.toLocaleString('en-US', { weekday: 'long', month: 'short', day:'numeric', year:'numeric' })
    : '';

  switch (variant) {
    case 'current-hero':
      return (
        <div className='hero-bg-image-mobile rounded-3xl px-6 py-12 md:py-20 md:flex md:flex-row md:justify-between md:items-center'>
          <div className='flex flex-col pb-4 md:text-left'>
            <span className='text-preset-4 pb-3'>Berlin, Germany</span>
            <span className='text-preset-6 text-neutral-000'>
              {formattedDate}
            </span>
          </div>
          <div className='flex items-center justify-evenly md:justify-end md:gap-2.5'>
            <WeatherIcon className='w-2/6' variant={weatherCode} />
            <span className='text-preset-1 text-neutral-000'>{`${currentTemp}°`}</span>
          </div>
        </div>
      );

    case 'current-data':
      return (
        <div className='rounded-3xl bg-neutral-800 outline-1 outline-neutral-600 flex flex-col text-left p-4 gap-6'>
          <span className='text-preset-6 text-neutral-200'>{label}</span>
          <span className='text-preset-3 text-neutral-000'>{value}</span>
        </div>
      );

    case 'daily-data':
      return (
        <div className='flex flex-col gap-4 p-5 rounded-3xl bg-neutral-800 outline-1 outline-neutral-600 text-center items-center'>
          <span>{label}</span>
          <WeatherIcon className='w-16' variant={dailyWeatherCode} />
          <div className='flex gap-7'>
            <span className='text-preset-7 text-neutral-200'>
              {Math.round(lowTemp)}°
            </span>
            <span className='text-preset-7 text-neutral-000'>
              {Math.round(highTemp)}°
            </span>
          </div>
        </div>
      );

    default:
      return (
        <div className='rounded-3xl bg-neutral-800 outline-1 outline-neutral-600'>
          {children}
        </div>
      );
  }
}

export default Card;
