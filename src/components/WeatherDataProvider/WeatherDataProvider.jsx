import React from 'react';
import {WeatherDataContext}  from './WeatherDataContext.jsx';
import useAPIFetch from '../../hooks/useAPIFetch.jsx';

function WeatherDataProvider({children}) {

  // const [location, setLocation] = React.useState();
  const [date, setDate] = React.useState();
  // const [currentTemp, setCurrentTemp] = React.useState();

  const weatherData = useAPIFetch(
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=America%2FNew_York'
  );

  React.useEffect(() => {
    if (weatherData) {
      const newDate = new Date(weatherData.current.time)
      setDate(newDate)
    }
  }, [weatherData])

  return <WeatherDataContext.Provider value={{weatherData, date}}>{children}</WeatherDataContext.Provider>;
}

export default WeatherDataProvider;
