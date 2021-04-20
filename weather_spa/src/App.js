import React, { useState } from 'react';
import './App.css';
import { getWeather } from './api/api';
import { CitiesList } from './components/CitiesList/CitiesList';

export const App = () => {
  const [cities, setCities] = useState([]);
  const [input, setInput] = useState('');
  const AddCity = (event) => {
    event.preventDefault();

    setCities([...cities, input]);
    setInput('');
  }

  // const getData = async(city) => {
  //   const response = await getWeather(city);
  
  //   console.log(response) ;
  // };

  function changeValue(event) {
    const { value } = event.target;
    setInput(value);
  }

  return (
    <div className="App">
      <form onSubmit={AddCity} className="form">
        <input
          type="text"
          value={input}
          placeholder="Input Cities"
          onChange={changeValue}
        >
        </input>
        <button type="submit"> Add City</button>
        <button onClick={() => setCities([])}> Clear Cities</button>
      </form>
      <CitiesList cities={cities} />
    </div>
  );
}

