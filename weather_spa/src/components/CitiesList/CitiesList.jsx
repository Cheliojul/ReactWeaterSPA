import React, { useState } from 'react';
import './CityList.css'
import { CityCard } from '../CityCard/CityCard'

export const CitiesList = ({ cities }) => {

  return (
    <>
      <div className="CityList">
        {cities.length >= 1 ? cities.map(city => (
          <CityCard city={city}/>
        )): `Select Cities`}
      </div>
    </>
  )
}
