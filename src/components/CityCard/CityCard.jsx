import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal'
import { getWeather } from '../../api/api'
import './CityCard.css'

export const CityCard = ({ city, onDelete }) => {
  const [data, setData] = useState({});
  const [modalActive, setModalActive] = useState(true);

  const handleClick = () => {
    getWeather(city).then(result => setData(result));
  }

  useEffect(() => {
    getWeather(city)
    .then(result => {
      if (result.cod === 200){
        setData(result);
        return;
      }
      alert('Cant find city');
      onDelete(city);
    })
  },);

  return data.base ? (
      <div
        key={data.id}
        className="city-card card border border-secondary"
        onClick={() => setModalActive(true)}
      >
        <div className="city-card__title">
          {`${data.name} , ${data.sys.country} `}
          <img
            src={`https://www.countryflags.io/${data.sys.country}/flat/16.png`}
            alt=''
          />
        </div>
        <div className="city-card__desciption">
          <div className="city-card__main">
            <img
              className="city-card__icon align-baseline"
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt='weather-icon'
            ></img>
            <span className="city-card__temperature">
              {`${Math.round(data.main.temp - 273.15)} °C`}
            </span>
          </div>
          <div className="city-card__wind">
            {`Wind: ${data.wind.speed} m/s`}
          </div>
          <div className="city-card__clouds">
            {`Clouds: ${data.clouds.all} %`}
          </div>
          <div className="city-card__hpa">
            {`Pressure:${Math.round(data.main.pressure * 0.75)} mm`}
          </div>
        </div>
        <div className='container city-card__button-container'>
          <button
            className="city-card__button-delete btn btn-sm h-100 w-50 p-1 align-bottom "
            onClick={() => onDelete(city)}
          >
          </button>
          <button
            onClick={() => handleClick()}
            className="city-card__button-refresh btn btn-sm h-100 w-50 p-1">
          </button>
        </div>
        <Modal active={modalActive} setActive={setModalActive} />
      </div>
    )
    : '';
    
}

