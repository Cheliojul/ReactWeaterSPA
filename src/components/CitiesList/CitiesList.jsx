import React, { useEffect } from 'react';
import './CityList.css'
import { CityCard } from '../CityCard/CityCard'

export const CitiesList = React.memo(({ cities, onDelete}) => {
  useEffect(() => {},[]);
  console.log('render')
  return (
    <>
      <div className="city-list row row-cols-1 row-cols-sm-2 row-cols-md-4">
        {console.log('CITIES', cities)}
        {cities ? cities.map(city => (
          <CityCard city={city} onDelete={onDelete} />
        )): `Select Cities`}
      </div>
    </>
  )
})
