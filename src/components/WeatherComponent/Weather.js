import React, { useState } from 'react';
import DisplayWeather from '../DisplayWeatherComponent/DisplayWeather';
import { DisplaySevenDayWeather } from '../DisplayWeatherComponent/DisplaySevenDayWeather';
import './weather.css';

export const Weather = ({ data }) => {
  const [weather, setWeather] = useState({});
  const [sevenDayWeather, setSevenDayWeather] = useState({});
  const [form, setForm] = useState({
    city: '',
    country: '',
  });

  const [coords, setCoords] = useState({ lat: '', lon: '' });

  const APIKEY = '29d0d2ae524fcf79540d75dc3210e8a8';
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === '') {
      alert('Enter values for city & country');
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.log(error));

      if (data.cod === '404') {
        alert('Enter a valid city & country ');
        setForm({ city: '', country: '' });
      } else {
        setWeather({ data });
        setCoords({ lat: data.coord.lat, lon: data.coord.lon });
        weatherSevenDayData(data.coord.lat, data.coord.lon);
        setForm({ city: '', country: '' });
      }
    }
  }

  const weatherSevenDayData = async (lat, lon) => {
    const endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${APIKEY}`;

    const data = await fetch(endpoint)
      .then((res) => res.json())
      .then((data) => data);
    console.log('7 day data', data);
    setSevenDayWeather(data);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };
  return (
    <div className='weather'>
      <span className='title'>React Weather App</span>
      <br />
      <form>
        <input
          type='text'
          placeholder='city'
          name='city'
          onChange={(e) => handleChange(e)}
          value={form.city}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type='text'
          placeholder='country'
          name='country'
          onChange={(e) => handleChange(e)}
          value={form.country}
        />
        <button className='getweather' onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>
      {/* console.log(weather) */}
      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
          <DisplaySevenDayWeather sevendaydata={sevenDayWeather} />
        </div>
      ) : null}
    </div>
  );
};
