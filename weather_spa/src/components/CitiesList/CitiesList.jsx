import React, { useState } from 'react';
import './CityList.css'
import { CityCard } from '../CityCard/CityCard'

export const CitiesList = ({ cities }) => {
  console.log(cities)
  return (
    <>
      <div className="CityList">
        {console.log(cities)}
        {cities.length >= 1 ? cities.map(city => (
          <CityCard city={city}/>
        )): `Select Cities`}
      </div>
    </>
  )
}
