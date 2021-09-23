import React from 'react';
import './displaysevendayweather.css';

export const DisplaySevenDayWeather = ({ sevendaydata }) => {
  console.log(sevendaydata);

  const sevenDayData =
    sevendaydata &&
    sevendaydata.daily &&
    sevendaydata.daily.length > 0 &&
    sevendaydata.daily.map((day, index) => {
      const iconUrl =
        'http://openweathermap.org/img/wn/' +
        sevendaydata.daily[index].weather[0].icon +
        '.png';
      if (index > 0) {
        const dayName = new Date(day.dt * 1000).toLocaleDateString('en', {
          weekday: 'long',
        });
        const temp = day.temp.day.toFixed(0);
        return (
          <div className='forecast-day'>
            <p>{dayName}</p>
            <p>
              <span className={`ico-${iconUrl}`} title={`${iconUrl}`}></span>
              <img className='weather-icon' src={iconUrl} alt='' srcset='' />
            </p>
            <div className='forecast-day--temp'>
              {temp}
              <sup>°F</sup>
            </div>
          </div>
        );
      }
    });

  console.log(sevenDayData);

  return <React.Fragment>{sevenDayData}</React.Fragment>;
};
