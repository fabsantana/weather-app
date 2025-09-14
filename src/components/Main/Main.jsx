import React from 'react';
import Header from '../Header/Header.jsx';
import Body from '../Body/Body.jsx'
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import { WeatherDataContext } from '../WeatherDataProvider/WeatherDataContext.jsx';
import Nav from '../Nav/Nav.jsx';

function Main() {

  const {weatherData} = React.useContext(WeatherDataContext)

  return (
    <>
      <Nav />
      <Header />
      {!weatherData ? <ErrorPage /> : <Body />}
    </>
  ) 
}

export default Main;
