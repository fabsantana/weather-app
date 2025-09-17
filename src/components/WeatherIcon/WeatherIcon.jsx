import React from 'react';
import { IconsContext } from '../IconsProvider/IconsContext.jsx';

const codeToKey = {
  0: 'clear',
  1: 'partlyCloudy',
  2: 'partlyCloudy',
  3: 'overcast',
  45: 'fog',
  48: 'fog',
  51: 'drizzle',
  53: 'drizzle',
  55: 'drizzle',
  61: 'rain',
  63: 'rain',
  65: 'rain',
  71: 'snow',
  73: 'snow',
  75: 'snow',
  95: 'thunderstorms',
};

function WeatherIcon({ className = '', variant }) {
  const { WEATHER_ICONS } = React.useContext(IconsContext);
  const iconKey = codeToKey[variant]
  const iconUrl = iconKey && WEATHER_ICONS[iconKey] ? WEATHER_ICONS[iconKey].weatherIconURL : ''
  return iconUrl ? (
    <img className={className} src={iconUrl} />
  ) : null;
}

export default WeatherIcon;
