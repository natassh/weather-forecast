import React from 'react';
import PropTypes from 'prop-types';

import './ArticleWeather.css';

const ArticleWeather = ({ className, weather }) => {
  //if (weather.weather.cod === '404' || weather.weather.cod === 404) {
  const { name, main, wind } = weather.weather;

  const kelvin = 273.15;

  const temp = parseFloat(main.temp - kelvin, 10).toFixed(2);
  const tempMax = parseFloat(main.temp_max - kelvin, 10).toFixed(2);
  const tempMin = parseFloat(main.temp_min - kelvin, 10).toFixed(2);
  const humidity = main.humidity;
  const windSpeed = wind.speed;

  return (
    <article className={className}>
      <h2>El clima de {name} es:</h2>
      <ul>
        <li>Temperatura actual: {temp} ºC</li>
        <li>Temperatura máxima para hoy: {tempMax} ºC</li>
        <li>Temperatura mínima para hoy: {tempMin} ºC</li>
        <li>Humedad: {humidity} %</li>
        <li>Viento: {windSpeed} km/h</li>
      </ul>
    </article>
  );
};

export default ArticleWeather;

ArticleWeather.propTypes = {
  className: PropTypes.string,
  weather: PropTypes.object
};
