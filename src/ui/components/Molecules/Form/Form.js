import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getWeather } from '../../../../core/services/weather';

import InputCity from '../../Atoms/InputCity';
//import SelectCountry from '../../Atoms/SelectCountry';
import ButtonSearch from '../../Atoms/ButtonSearch';
import TextError from '../../Atoms/TextError';

import options from '../../../assets/countrySelect/countryOptionsSelect';

import SelectCountry from 'react-select';
import '../../Atoms/SelectCountry';

import './Form.css';

const Form = ({ className, onWeatherObtained }) => {
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const handleChange = value => {
    setCity({ city: value });
  };

  const handleChangeSelect = country => {
    const countryCode = country.value;
    setCountry({ country: countryCode });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (city && country) {
      const citySelected = city.city;
      const countrySelected = country.country;
      const weatherObtained = await getWeather(citySelected, countrySelected);
      onWeatherObtained(weatherObtained);
    } else {
      console.log('ciudades vacias');
      //showError();
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <InputCity onChange={handleChange} />

      <label>Selecciona un país:</label>
      <SelectCountry
        onChange={handleChangeSelect}
        options={options}
        className="Form__SelectCountry"
      />

      <ButtonSearch type="submit" value="Buscar" />
    </form>
  );
};

export default Form;

Form.propTypes = {
  className: PropTypes.string
};
