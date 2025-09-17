import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx';
import { WeatherDataContext } from '../WeatherDataProvider/WeatherDataContext.jsx';

function Card({ variant, label, value }) {
  const { date, currentTemp, weatherCode } =
    React.useContext(WeatherDataContext);

  const formattedDate = date ? date.toDateString() : '';

  switch (variant) {
    case 'current-hero':
      return (
        <div className='hero-bg-image-mobile rounded-3xl px-6 py-8'>
          <div className='flex flex-col pb-4'>
            <span className='text-preset-4 pb-3'>Berlin, Germany</span>
            <span className='text-preset-6 text-neutral-000'>
              {formattedDate}
            </span>
          </div>
          <div className='flex items-center justify-evenly'>
            <WeatherIcon className='w-2/5' variant={weatherCode} />
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
        <div>
          <span></span>
          <WeatherIcon className='w-2/5' variant={weatherCode}/>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      )

    default:
      return null;
  }
}

export default Card;
