import React, { useEffect, useState } from 'react';
import { getWeather } from '../../api/api'
import './CityCard.css'

export const CityCard = ({ city }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    getWeather(city).then(result => setData(result))
  },[]);
  console.log(data)
  console.log(Boolean(Object.keys(data).length))
  return Object.keys(data).length ? (
      
      <div key={data.id} className="CityCard">
        <div className="CityCard__title">
          {`${data.name} , ${data.sys.country}`}
        </div>
        <div className="CityCard__desciption">
          {data.weather[0].description}
        </div>
        <button className="CityCard__button">
          D
        </button>
        <button className="CityCard__button">
          R
        </button>
      </div>
    )
    : 'Loading...';
}

