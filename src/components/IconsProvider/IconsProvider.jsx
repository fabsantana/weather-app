import React from 'react';
import { IconsContext } from './IconsContext.jsx';

function IconsProvider({ children }) {
  const APP_ICONS = {
    search: {
      appIconName: 'search',
      appIconURL: 'images/icon-search.svg',
      appIconID: crypto.randomUUID(),
    },
    gear: {
      appIconName: 'checkmark',
      appIconURL: 'images/icon-units.svg',
      appIconID: crypto.randomUUID(),
    },
    dropdown: {
      appIconName: 'checkmark',
      appIconURL: 'images/icon-dropdown.svg',
      appIconID: crypto.randomUUID(),
    },
    error: {
      appIconName: 'checkmark',
      appIconURL: 'images/icon-error.svg',
      appIconID: crypto.randomUUID(),
    },
    checkmark: {
      appIconName: 'checkmark',
      appIconURL: 'images/icon-checkmark.svg',
      appIconID: crypto.randomUUID(),
    },
    loading: {
      appIconName: 'checkmark',
      appIconURL: 'images/icon-loading.svg',
      appIconID: crypto.randomUUID(),
    },
    retry: {
      appIconName: 'retry',
      appIconURL: 'images/icon-retry.svg',
      appIconID: crypto.randomUUID(),
    },
  };
  const WEATHER_ICONS = {
    clear: {
      weatherName: 'clear',
      weatherIconURL: 'images/icon-sunny.webp',
      weatherIconID: crypto.randomUUID(),
      weatherCode: 0,
    },
    partlyCloudy: {
      weatherName: 'partly cloudy',
      weatherIconURL: 'images/icon-partly-cloudy.webp',
      weatherIconID: crypto.randomUUID(),
      weatherCode: 2,
    },
    overcast: {
      weatherName: 'overcast',
      weatherIconURL: 'images/icon-overcast.webp',
      weatherIconID: crypto.randomUUID(),
      weatherCode: 3,
    },
    fog: {
      weatherName: 'fog',
      weatherIconURL: 'images/icon-fog.webp',
      weatherIconID: crypto.randomUUID(),
      weatherCode: 45,
    },
    drizzle: {
      weatherName: 'drizzle',
      weatherIconURL: 'images/icon-drizzle.webp',
      weatherIconID: crypto.randomUUID(),
      weatherCode: 51,
    },
    rain: {
      weatherName: 'rain',
      weatherIconURL: 'images/icon-rain.webp',
      weatherIconID: crypto.randomUUID(),
      weatherCode: 61,
    },
    snow: {
      weatherName: 'snow',
      weatherIconURL: 'images/icon-snow.webp',
      weatherIconID: crypto.randomUUID(),
      weatherCode: 71,
    },
    thunderstorms: {
      weatherName: 'thunderstorms',
      weatherIconURL: 'images/icon-thunderstorms.webp',
      weatherIconID: crypto.randomUUID(),
      weatherCode: 95,
    },
  };
  return (
    <IconsContext.Provider value={{ WEATHER_ICONS, APP_ICONS }}>
      {children}
    </IconsContext.Provider>
  );
}

export default IconsProvider;
