import React, { useState, useCallback } from 'react';
import './App.css';
import { CitiesList } from './components/CitiesList/CitiesList';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export const App = () => {
  const [cities, setCities] = useLocalStorage('cities', []);
  const [input, setInput] = useState('');

  const onDelete = useCallback((cityName) => {
    const filteredCities = cities
      .filter((city) => city !== cityName);
    setCities(filteredCities);
  });

  const AddCity = (event) => {
    event.preventDefault();

    if (input.length < 2) {
      setInput('Please enter valid city name');
      document.querySelector('.form__input').style.backgroundColor = 'red';
    } else if (!cities.includes(input)) {
      setCities([...cities, input]);
    } else {
      document.querySelector('.form__input').style.backgroundColor = 'red';
      setInput('City already added');
    }
  };

  function changeValue(event) {
    const { target } = event;
    const { value } = target;

    if (target.style.backgroundColor === 'red') {
      target.style.backgroundColor = '#d9c88b';
    }
    setInput(value);
  }

  return (
    <div className="App">
      <form
        onSubmit={AddCity}
        className="form d-flex justify-content-center"
      >
        <input
          type="text"
          value={input}
          placeholder="Input City"
          onChange={changeValue}
          className="form__input col-4"
        />
        <button
          type="submit"
          className="form__button col-2 btn"
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => setCities([])}
          className="form__button col-2 btn"
        >
          Clear
        </button>
      </form>
      <CitiesList cities={cities} onDelete={onDelete} />
    </div>
  );
};
