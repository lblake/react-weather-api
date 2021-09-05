import React, { useState } from 'react';
import DisplayWeather from '../DisplayWeatherComponent/DisplayWeather';
import './weather.css';

export const Weather = ({ data }) => {
  const [weather, setWeather] = useState({});
  const [form, setForm] = useState({
    city: '',
    country: '',
  });

  const APIKEY = '29d0d2ae524fcf79540d75dc3210e8a8';
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === '') {
      alert('Enter values for city & country');
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
        .then(checkStatus)
        .then((res) => res.json())
        .then((data) => data);

      console.log(data);
      console.log(data.coord.lat);
      console.log(data.coord.lon);

      if (data.cod === '404') {
        alert('Enter a valid city & country ');
      } else {
        setWeather({ data });
      }
    }
    weatherSevenDayData();
  }

  const checkStatus = (res) => {
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      let err = new Error(res.statusText);
      err.response = res;
      throw err;
    }
  };

  const weatherSevenDayData = () => {
    console.log('7 day function called');
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

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
