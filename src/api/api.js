

export  async function getWeather(city) {
  function capitalize(string) {
    return string.substr(0,1).toUpperCase() + string.slice(1).toLowerCase();
  }

  const ApiKey = 'afe223e3b6e3c00d7638f2e54b649880';
  const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalize(city)}&appid=${ApiKey}`;

  let response = await fetch(ApiUrl)
  let cityWeather = await response.json();
 
  return cityWeather;
}
