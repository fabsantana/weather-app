import React from 'react';
import { WeatherDataContext } from './WeatherDataContext.jsx';
import useAPIFetch from '../../hooks/useAPIFetch.jsx';

function WeatherDataProvider({ children }) {
  // Current Weather State Variables
  // const [location, setLocation] = React.useState();
  const [date, setDate] = React.useState();
  const [currentTemp, setCurrentTemp] = React.useState();
  const [weatherCode, setWeatherCode] = React.useState();
  const [apparentTemp, setApparentTemp] = React.useState();
  const [humidity, setHumidity] = React.useState();
  const [wind, setWind] = React.useState();
  const [precipitation, setPrecipitation] = React.useState();
  const [windUnits, setWindUnits] = React.useState();
  const [precipitationUnits, setPrecipitationUnits] = React.useState();

  // Daily Weather State Variables

  const [dailyWeatherCode, setDailyWeatherCode] = React.useState([]);
  const [dailyWeatherDate, setDailyWeatherDate] = React.useState([]);
  const [dailyLowTemp, setDailyLowTemp] = React.useState([]);
  const [dailyHighTemp, setDailyHighTemp] = React.useState([]);

  // Hourly Weather State Variables

  const [hourlyWeatherCode, setHourlyWeatherCode] = React.useState([]);
  const [hourlyTemp, setHourlyTemp] = React.useState([]);
  const [hourlyTime, setHourlyTime] = React.useState([]);

  const weatherData = useAPIFetch(
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=America%2FNew_York'
  );

  React.useEffect(() => {
    if (weatherData) {
      console.log(weatherData);
      const newDate = new Date(weatherData.current.time);

      // Set Current Weather
      setDate(newDate);

      setCurrentTemp(Math.round(weatherData.current.temperature_2m));

      setWeatherCode(weatherData.current.weather_code);

      setApparentTemp(weatherData.current.apparent_temperature);

      setHumidity(weatherData.current.relative_humidity_2m);

      setWind(weatherData.current.wind_speed_10m);

      setPrecipitation(weatherData.current.precipitation);

      setWindUnits(weatherData.current_units.wind_speed_10m);

      setPrecipitationUnits(weatherData.current_units.precipitation);

      // Set Daily Weather

      setDailyWeatherDate(weatherData.daily.time);

      setDailyWeatherCode(weatherData.daily.weather_code);

      setDailyLowTemp(weatherData.daily.temperature_2m_min);

      setDailyHighTemp(weatherData.daily.temperature_2m_max);

      // Set Hourly Weather

      setHourlyTemp(weatherData.hourly.temperature_2m);

      setHourlyTime(weatherData.hourly.time);

      setHourlyWeatherCode(weatherData.hourly.weather_code);
    }
  }, [weatherData]);

  return (
    <WeatherDataContext.Provider
      value={{
        weatherData,
        date,
        currentTemp,
        weatherCode,
        apparentTemp,
        humidity,
        wind,
        precipitation,
        precipitationUnits,
        windUnits,
        dailyWeatherCode,
        dailyWeatherDate,
        dailyHighTemp,
        dailyLowTemp,
        hourlyTemp,
        hourlyTime,
        hourlyWeatherCode,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
}

export default WeatherDataProvider;
