

export  async function getWeather(city) {
  function capitalize(string) {
    return string.substr(0,1).toUpperCase() + string.slice(1).toLowerCase();
  }

  const ApiKey = '13a6405deb1e9db72af059a8a82740ff';
  const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalize(city)}&appid=${ApiKey}`;

  let response = await fetch(ApiUrl)
  let cityWeather = await response.json();
 
  return cityWeather;
}
