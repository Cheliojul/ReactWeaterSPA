import React from 'react';
import { getWeather } from '../../api/api'
import './city-card.css'
export const CityCard = (city) => {
  const weather = getWeather(city);
  console.log('CITYCARD', weather);
  console.log(weather.base)
  return (
    <div key={weather.id} className="city-card">
      <div>{weather.base}</div>
    </div>
  );
}
