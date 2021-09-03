import React, { useState, useEffect } from 'react';
import  DisplayWeather  from '../DisplayWeatherComponent/DisplayWeather';
import './weather.css';

export const Weather = ({ data }) => {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: '',
    country: '',
  });

  const APIKEY = '29d0d2ae524fcf79540d75dc3210e8a8';
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === '') {
      alert('Add values');
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'city') {
      setForm({ ...form, city: value });
    }
    if (name === 'country') {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div className='weather'>
      <span className='title'>Weather App</span>
      <br />
      <form>
        <input
          type='text'
          placeholder='city'
          name='city'
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type='text'
          placeholder='Country'
          name='country'
          onChange={(e) => handleChange(e)}
        />
        <button className='getweather' onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>
      {/* console.log(weather) */}
      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
};
