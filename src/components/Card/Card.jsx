import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx';
import {WeatherDataContext} from '../WeatherDataProvider/WeatherDataContext.jsx';
import {IconsContext} from '../IconsProvider/IconsContext.jsx';


function Card() {
  const {date, currentTemp, weatherCode} = React.useContext(WeatherDataContext)
  // const {} = React.useContext(IconsContext)

  const formattedDate = date ? date.toDateString() : ''

  return (
    <div className='hero-bg-image-mobile rounded-3xl px-6 py-8'>
      <div className='flex flex-col pb-4'>
        <span className='text-preset-4 pb-3'>Berlin, Germany</span>
        <span className='text-preset-6 text-neutral-000'>{formattedDate}</span>
      </div>
      <div className='flex items-center justify-evenly'>
        <WeatherIcon className='w-2/5' variant={weatherCode} />
        <span className='text-preset-1 text-neutral-000'>{`${currentTemp}°`}</span>
      </div>
    </div>
  )

}

export default Card;
