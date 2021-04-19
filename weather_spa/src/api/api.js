const ApiKey = '71bfaa0157885f1150e345c287fba8cd';
const ApiUrl = `api.openweathermap.org/data/2.5/weather?q=Kharkiv&appid=${ApiKey}`;

export function getWeather() {
  return fetch(ApiUrl)
    .then(response => response.json());
}
