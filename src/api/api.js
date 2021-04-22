export async function getWeather(city) {
  function capitalize(string) {
    return string.substr(0, 1).toUpperCase() + string.slice(1).toLowerCase();
  }

  const ApiKey = '71bfaa0157885f1150e345c287fba8cd';
  const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalize(city)}&appid=${ApiKey}`;

  const response = await fetch(ApiUrl);
  const cityWeather = await response.json();

  return cityWeather;
}
