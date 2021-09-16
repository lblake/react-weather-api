import React from 'react';

export const DisplaySevenDayWeather = ({ sevendaydata }) => {
  const iconUrl =
    'http://openweathermap.org/img/wn/' +
    `${sevendaydata.cod !== 404 ? sevendaydata.weather[0].icon : null}` +
    '.png';

  const sevenDayData = sevendaydata.daily.map((day, index)) => {
    if (index > 0) {
      const dayName = new Date(day.dt * 1000).toLocaleDateString('en', {
        weekday: 'long',
      });
      const iconUrl = day.weather[0].icon;
      const temp = day.temp.day.toFixed(0);
      return (
        <div class='forecast-day'>
          <p>${dayName}</p>
          <p>
            <span class={`ico-${iconUrl}`} title={`${iconUrl}`}></span>
          </p>
          <div class='forecast-day--temp'>
            ${temp}
            <sup>°deg</sup>
          </div>
        </div>
      );
    }
  });

  console.log(sevenDayData);

  return <React.Fragment>{sevenDayData}</React.Fragment>;
};
