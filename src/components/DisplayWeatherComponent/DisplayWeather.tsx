import React, { useState, useEffect } from 'react';
import { SearchBar } from '../SearchBarComponent/SearchBar';

// export interface Weather {
//   city: string;
//   humidity: number;
//   pressure: number;
//   temp: number;
//   temp_max: number;
//   temp_min: number;
// }

// interface Data {
//   long: number;
//   // lat: string;
//   // API_KEY: string;
//   // baseURL: string;
//   // suffix: string;
// }
export const DisplayWeather = () => {
  const [city, setCity] = useState<string>('');

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  // const long: number = 51.343628859262196;
  // const lat: number = -0.11280270939009976;

  // const [isLoading, setIsloading] = useState(false);

  const apiKey: string = '29d0d2ae524fcf79540d75dc3210e8a8';
  const baseURL: string = 'https://api.openweathermap.org/data/2.5/weather/?';
  const suffix: string = `&units=metric&appid=${apiKey}`;
  const iconURL: string = 'https://openweathermap.org/img/wn/';

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(e.target.value);
  };

  // const getWeather = async () => {
  //   const response = await fetch(baseURL + city + suffix);
  //   const jsonWeather = await response.json();
  //   console.log(jsonWeather);
  // };

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition.bind(function (position: {
        coords: {
          latitude: React.SetStateAction<never[]>;
          longitude: React.SetStateAction<never[]>;
        };
      }) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      // await fetch(
      //   `${baseURL}lat=${lat}&lon=${long}&units=metric&APPID=${apiKey}`
      // )
      await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=London&appid=29d0d2ae524fcf79540d75dc3210e8a8'
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);
  console.log(lat, long);

  // useEffect(() => getWeather(city), []);
  return (
    <div>
      <SearchBar
        placeHolder={'Search...'}
        handleChange={(event) => handleSearch(event)}
      />
    </div>
  );
};
