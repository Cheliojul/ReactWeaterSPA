import React, { useState, useCallback } from 'react';
import './App.css';
import { CitiesList } from './components/CitiesList/CitiesList';
import { getWeather } from './api/api'

export const App = () => {
  
  const [cities, setCities] = useLocalStorage("cities", []);
  const [input, setInput] = useState('');

  const onDelete = (cityName) => {
    let filteredCities = cities
      .filter(city => city !== cityName)
    setCities(filteredCities);
    };

  const AddCity = (event) => {
    event.preventDefault();

    getWeather(input)
      .catch(error => setInput(''))
    if (input.length < 2) {
      alert('Please enter valid city name')
    } else {
      if (!cities.includes(input)) {
        setCities([...cities, input]);
      } else {
        alert('City already added')
      }
    }
    setInput('');
  }

  console.log('STATE _ CITIES - ', cities)
  function changeValue(event) {
    const { value } = event.target;
    setInput(value);
  }

  return (
    <div className="App">
      <form
        onSubmit={AddCity}
        className="d-flex justify-content-center"
      >
        <input
          type="text"
          value={input}
          placeholder="Input City"
          onChange={changeValue}
          className='col-2'
        >
        </input>
        <button
          type="submit"
          className='col-1 btn btn-secondary'
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => setCities([])}
          className='col-1 btn btn-secondary'
        >
          Clear
        </button>
      </form>
      <CitiesList cities={cities} onDelete={onDelete} />
    </div>
  );
}

function useLocalStorage(key, initialValue) {

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
