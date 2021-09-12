import React from 'react';

export const DisplaySevenDayWeather = ({ data }) => {
  const iconUrl =
    'http://openweathermap.org/img/wn/' +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    '.png';



  return (
  <React.Fragment>
  {data.daily.map((day, index) => {
    if (index > 0){
       dayName = new Date(day.dt * 1000).toLocaleDateString("en", {
						weekday: "long",});
          const iconUrl = day.weather[0].icon;
					const temp = day.temp.day.toFixed(0);
          `<div class="forecast-day">
						<p>${dayName}</p>
						<p><span class="ico-${iconUrl}" title="${iconUrl}"></span></p>
						<div class="forecast-day--temp">${temp}<sup>°deg</sup></div>
					</div>`;
          
    }
  }
  }}
  </React.Fragment>
  )
};
