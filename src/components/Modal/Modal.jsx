import React from 'react';
import './modal.css';

const handleKeyDown = () => {};
const Modal = ({ data, active, setModalActive }) => (
  <div
    className={active ? 'modal active' : 'modal'}
    onClick={() => setModalActive(false)}
    role="button"
    onKeyDown={handleKeyDown}
    tabIndex="0"
  >
    <div className="modal__content">
      <div className="modal__content__title">
        {`${data.name} , ${data.sys.country} `}
        <img
          src={`https://www.countryflags.io/${data.sys.country}/flat/16.png`}
          alt=""
        />
      </div>
      <div className="modal__content__desciption">
        <div className="modal__content__main">
          <img
            className="modal__content__icon align-baseline"
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt="weather-icon"
          />
          <span className="modal__content__temperature">
            {`${Math.round(data.main.temp - 273.15)} °C`}
          </span>
        </div>
        <div className="modal__content__description">
          {`${data.weather[0].description}`}
        </div>
        <div className="modal__content__wind">
          {`Wind: ${data.wind.speed} m/s`}
        </div>
        <div className="modal__content__clouds">
          {`Clouds: ${data.clouds.all} %`}
        </div>
        <div className="modal__content__hpa">
          {`Pressure: ${Math.round(data.main.pressure * 0.75)} mm`}
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
