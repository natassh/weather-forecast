import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputCity from '../../Atoms/InputCity';
import ButtonSearch from '../../Atoms/ButtonSearch';

import options from '../../../assets/countrySelect/countryOptionsSelect';

import SelectCountry from 'react-select';
import '../../Atoms/SelectCountry';

import './FormWeather.css';

const FormWeather = ({ className, weatherObtained }) => {
  const [weather, setWeather] = useState({
    city: '',
    country: ''
  });
  const handleChangeCity = cityValue => {
    setWeather({ city: cityValue });
  };

  const handleChangeCountry = country => {
    const countryCode = country.value;
    setWeather({
      ...weather,
      country: countryCode
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    weatherObtained(weather);
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <InputCity onChange={handleChangeCity} />

      <label>Selecciona un país:</label>
      <SelectCountry
        onChange={handleChangeCountry}
        options={options}
        className="Form__SelectCountry"
      />

      <ButtonSearch type="submit" value="Buscar" />
    </form>
  );
};

export default FormWeather;

FormWeather.propTypes = {
  className: PropTypes.string,
  weatherObtained: PropTypes.func
};
