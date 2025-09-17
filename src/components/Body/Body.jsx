import React from 'react';
import CurrentForecastSection from '../CurrentForecastSection/CurrentForecastSection.jsx'
import DailyForecastSection from '../DailyForecastSection/DailyForecastSection.jsx'
import HourlyForecastSection from '../HourlyForecastSection/HourlyForecastSection.jsx'

function Body() {
  
  return ( 
    <section className='pt-8'>
      <CurrentForecastSection />
      <DailyForecastSection />
      <HourlyForecastSection/>
    </section>
  )

}

export default Body;
