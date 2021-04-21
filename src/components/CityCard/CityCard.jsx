import React, { useEffect, useState } from 'react';
import { getWeather } from '../../api/api'
import './CityCard.css'

export const CityCard = ({ city }) => {
  const [data, setData] = useState({});

  // const handleClick = () => {
  //   getWeather(city).then(result => setData(result));
  // }
  console.log(data)

  useEffect(() => {
    getWeather(city).then(result => setData(result))
  },[city]);

  return data.base ? (
      <div key={data.id} className="CityCard card border border-secondary">
        <div className="CityCard__title">
          {`${data.name} , ${data.sys.country} `}
          <img src={`https://www.countryflags.io/${data.sys.country}/flat/16.png`} alt='flag-icon'/>
        </div>
        <div className="CityCard__desciption">
          <img
            className="CityCard__icon align-baseline"
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt='weather-icon'
          ></img>
          <span className="CityCard__temperature">
            {`${Math.round(data.main.temp - 273.15)} °C`}
          </span>
          <div className="CityCard__wind">
            {`wind ${data.wind.speed} m/s`}
          </div>
          <div className="CityCard__clouds">
            {`clouds ${data.clouds.all} %`}
          </div>
          <div className="CityCard__hpa">
            {`${data.main.pressure} hpa`}
          </div>
        </div>
        <div className='container CityCard__button-container'>
          <button className="CityCard__button-delete btn btn-sm h-100 w-50 p-1 align-bottom ">
          </button>
          <button
            // onClick={() => handleClick}
            className="CityCard__button-refresh btn btn-sm h-100 w-50 p-1">
          </button>
        </div>
      </div>
    )
    : '';
}
