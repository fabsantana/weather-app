import { React } from 'react';
import './App.css';
import IconsProvider from './components/IconsProvider/IconsProvider.jsx';
import WeatherDataProvider from './components/WeatherDataProvider/WeatherDataProvider.jsx';
import Main from './components/Main/Main.jsx'

function App() {

  return (
    <WeatherDataProvider>
      <IconsProvider>
        <Main />
      </IconsProvider>
    </WeatherDataProvider>
  );
}

export default App;
