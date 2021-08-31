import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { DisplayWeather } from './components/DisplayWeatherComponent/DisplayWeather';
import {SearchPage} from './components/SearchPageComponent/SearchPage'
function App() {
  return (
    <div className='App'>
      <div>
        <h1>React Weather App</h1>
        <DisplayWeather />
        {/* <SearchPage/> */}
      </div>
    </div>
  );
}

export default App;
