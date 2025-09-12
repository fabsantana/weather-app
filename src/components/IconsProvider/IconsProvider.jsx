import React from 'react';
import { IconsContext } from './IconsContext.jsx';

function IconsProvider({ children }) {
  const APP_ICONS = {
    search: {
      appIconName: 'search',
      appIconURL: 'public/images/icon-search.svg',
      appIconID: crypto.randomUUID(),
    },
    gear: {
      appIconName: 'checkmark',
      appIconURL: 'public/images/icon-units.svg',
      appIconID: crypto.randomUUID(),
    },
    dropdown: {
      appIconName: 'checkmark',
      appIconURL: 'public/images/icon-dropdown.svg',
      appIconID: crypto.randomUUID(),
    },
    error: {
      appIconName: 'checkmark',
      appIconURL: 'public/images/icon-error.svg',
      appIconID: crypto.randomUUID(),
    },
    checkmark: {
      appIconName: 'checkmark',
      appIconURL: 'public/images/icon-checkmark.svg',
      appIconID: crypto.randomUUID(),
    },
    loading: {
      appIconName: 'checkmark',
      appIconURL: 'public/images/icon-loading.svg',
      appIconID: crypto.randomUUID(),
    },
    retry: {
      appIconName: 'retry',
      appIconURL: 'public/images/icon-retry.svg',
      appIconID: crypto.randomUUID(),
    },
  };
  const WEATHER_ICONS = {
    clear: {
      weatherName: 'clear',
      weatherIconURL: 'public/images/icon-sunny.webp',
      weatherIconID: crypto.randomUUID(),
    },
    'partly-cloudy': {
      weatherName: 'partly cloudy',
      weatherIconURL: 'public/images/icon-partly-cloudy.webp',
      weatherIconID: crypto.randomUUID(),
    },
    overcast: {
      weatherName: 'overcast',
      weatherIconURL: 'public/images/icon-overcast.webp',
      weatherIconID: crypto.randomUUID(),
    },
    fog: {
      weatherName: 'fog',
      weatherIconURL: 'public/images/icon-fog.webp',
      weatherIconID: crypto.randomUUID(),
    },
    drizzle: {
      weatherName: 'drizzle',
      weatherIconURL: 'public/images/icon-drizzle.webp',
      weatherIconID: crypto.randomUUID(),
    },
    rain: {
      weatherName: 'rain',
      weatherIconURL: 'public/images/icon-rain.webp',
      weatherIconID: crypto.randomUUID(),
    },
    snow: {
      weatherName: 'snow',
      weatherIconURL: 'public/images/icon-snow.webp',
      weatherIconID: crypto.randomUUID(),
    },
    thunderstorms: {
      weatherName: 'thunderstorms',
      weatherIconURL: 'public/images/icon-thunderstorms.webp',
      weatherIconID: crypto.randomUUID(),
    },
  };
  return (
    <IconsContext.Provider value={{ WEATHER_ICONS, APP_ICONS }}>
      {children}
    </IconsContext.Provider>
  );
}

export default IconsProvider;
