import React from 'react';
import './CityList.css';
import { CityCard } from '../CityCard/CityCard';

export const CitiesList = React.memo(({ cities, onDelete }) => (
  <div className="city-list row row-cols-1 row-cols-sm-2 row-cols-md-4">
    {cities ? cities.map((city) => (
      <CityCard city={city} onDelete={onDelete} />
    )) : 'Select Cities'}
  </div>
));
