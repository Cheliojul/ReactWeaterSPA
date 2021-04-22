import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import { getWeather } from '../../api/api';
import './CityCard.css';

export const CityCard = ({ city, onDelete }) => {
  const [data, setData] = useState({});
  const [modalActive, setModalActive] = useState(false);
  const handleClick = () => {
    getWeather(city).then((result) => setData(result));
  };
  const handleKeyDown = () => {};

  useEffect(() => {
    getWeather(city)
      .then((result) => {
        if (result.cod === 200) {
          setData(result);
          return;
        }
        onDelete(city);
      });
  }, []);

  return data.base ? (
    <>
      <div
        key={data.id}
        className="city-card card border border-secondary"
        onClick={(event) => {
          if (event.target.type !== 'button') {
            setModalActive(true);
          }
        }}
        role="button"
        onKeyDown={handleKeyDown}
        tabIndex="0"
      >

        <div className="city-card__title">
          {`${data.name}`}
          <div>
            {`${data.sys.country}`}
            <img
              src={`https://www.countryflags.io/${data.sys.country}/flat/16.png`}
              alt=""
            />
          </div>
        </div>
        <div className="city-card__desciption">
          <div className="city-card__main">
            <img
              className="city-card__icon align-baseline"
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              alt="weather-icon"
            />
            <span className="city-card__temperature">
              {`${Math.round(data.main.temp - 273.15)} °C`}
            </span>
          </div>
        </div>
        <div className="container city-card__button-container">
          <input
            type="button"
            className="city-card__button-delete btn btn-sm h-100 w-50 p-1 align-bottom"
            onClick={() => onDelete(city)}
          />
          <input
            type="button"
            onClick={() => handleClick()}
            className="city-card__button-refresh btn btn-sm h-100 w-50 p-1"
          />
        </div>
      </div>
      { modalActive
      && <Modal data={data} active={modalActive} setModalActive={setModalActive} />}
    </>
  )
    : '';
};
