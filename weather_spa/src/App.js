import React, { useState } from 'react';
import './App.css';
import { CitiesList } from './components/CitiesList/CitiesList';

export const App = () => {
  const [cities, setCities] = useLocalStorage("cities", []);
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
      <form onSubmit={AddCity} className="form-row">
        <input
          type="text"
          value={input}
          placeholder="Input Cities"
          onChange={changeValue}
          className='d-block align-self-center'
        >
        </input>
        <button type="submit"> Add City</button>
        <button onClick={() => setCities([])}> Clear Cities</button>
      </form>
      <CitiesList cities={cities} />
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
