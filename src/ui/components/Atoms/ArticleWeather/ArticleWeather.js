import React from 'react';
import PropTypes from 'prop-types';

import './ArticleWeather.css';

const ArticleWeather = ({ className, weather }) => {
  console.log(weather);
  const { name, main, wind } = weather.weather;
  const kelvin = 273.15;

  const temp = parseFloat(main.temp - kelvin, 10).toFixed(2);
  const tempMax = parseFloat(main.temp_max - kelvin, 10).toFixed(2);
  const tempMin = parseFloat(main.temp_min - kelvin, 10).toFixed(2);
  const humidity = main.humidity;
  const windSpeed = wind.speed;

  return (
    <article className={className}>
      <h2>
        El clima de {name} es: <strong>{temp} ºC</strong>
      </h2>
      <ul>
        <li>
          Temperatura actual: <strong>{temp} ºC</strong>
        </li>
        <li>
          Temperatura máxima para hoy: <strong>{tempMax} ºC</strong>
        </li>
        <li>
          Temperatura mínima para hoy: <strong>{tempMin} ºC</strong>{' '}
        </li>
        <li>
          Humedad: <strong>{humidity} %</strong>{' '}
        </li>
        <li>
          Viento: <strong>{windSpeed} km/h</strong>{' '}
        </li>
      </ul>
    </article>
  );
};

export default ArticleWeather;

ArticleWeather.propTypes = {
  className: PropTypes.string,
  weather: PropTypes.object
};
