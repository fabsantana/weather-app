import React from 'react';
import Card from '../Card/Card.jsx'
import { WeatherDataContext } from '../WeatherDataProvider/WeatherDataContext.jsx';

function CurrentForecastSection() {

  const {humidity, apparentTemp, wind, precipitation, windUnits, precipitationUnits} = React.useContext(WeatherDataContext)

  const dataCards = [
    {
      label: 'Feels Like',
      value: apparentTemp !== undefined ? `${Math.round(apparentTemp)}°` : ''
    },
    {
      label: 'Humidity',
      value: humidity !== undefined ? `${humidity}%` : ''
    },
    {
      label: 'Wind',
      value: wind !== undefined ? `${Math.round(wind)} ${windUnits}` : ''
    },
    {
      label: 'Precipitation',
      value: precipitation !== undefined ? `${precipitation} ${precipitationUnits}` : ''
    },
  ]

  return (
    <>
      <Card variant='current-hero' />
      <div className='grid grid-cols-2 grid-rows-2 gap-4 pt-5'>
        {dataCards.map((data, idx) => (
          <Card 
            key={idx}
            variant='current-data'
            label={data.label}
            value={data.value}
          />
        ))}
      </div>
    </>
  )
}

export default CurrentForecastSection;
