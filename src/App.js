import React from 'react';
import './App.css';
import { Weather } from './components/WeatherComponent/Weather';
import  {DisplaySevenDayWeather}  from './components/DisplayWeatherComponent/DisplaySevenDayWeather';

function App() {
  return (
    <div>
      <Weather />
      <DisplaySevenDayWeather />
    </div>
  );
}

export default App;
