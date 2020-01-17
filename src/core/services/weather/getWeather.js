//import { endPoint } from '../../api/config/api-config';
import { app_key } from '../../api/config/api-config';

const getWeather = (city, country) => {
  const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${app_key}`;
  const weatherResponseObject = fetch(endPoint);
  const weatherJsonPromise = weatherResponseObject.then(res => res.json());
  const weatherData = weatherJsonPromise.then(data => data);
  return weatherData;
};

export { getWeather };
