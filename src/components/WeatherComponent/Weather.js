import React, { useState } from 'react';
import DisplayWeather from '../DisplayWeatherComponent/DisplayWeather';
import { DisplaySevenDayWeather } from '../DisplayWeatherComponent/DisplaySevenDayWeather';
import './weather.css';

export const Weather = ({ data }) => {
  const [weather, setWeather] = useState({});
  const [lat, setLat] = useState({});
  const [long, setLong] = useState({});
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
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}&units=metric`
      )
        // .then(checkStatus)
        .then((res) => res.json())
        .then((data) => data);

      console.log(data.name);
      // console.log(data.coord.lat);
      // console.log(data.coord.lon);

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

  const weatherSevenDayData = async () => {
    const endpoint =
      'https://api.openweathermap.org/data/2.5/onecall?lat=51.3385&lon=-0.1159&exclude=current,hourly,minutely,alerts&units=metric&appid=29d0d2ae524fcf79540d75dc3210e8a8';

    const data = await fetch(endpoint)
      .then((res) => res.json())
      .then((data) => data);
    console.log('7 day data', data);
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
          placeholder='country'
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
          <DisplaySevenDayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
};
