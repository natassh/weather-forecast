import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputCity from '../../Atoms/InputCity';
import SelectCountry from '../../Atoms/SelectCountry';

import './Form.css';

const Form = ({ className }) => {
  const [state, setState] = useState({
    value: ''
  });

  const handleChange = valueInput => {
    setState({ value: valueInput });
  };

  const handleChangeSelect = dato => {
    console.log('dato select');
  };

  return (
    <form className={className}>
      <InputCity onChange={handleChange} />
      <SelectCountry onChange={handleChangeSelect}>
        <option value="ES">España</option>
        <option value="BE">Bélgica</option>
        <option value="RU">Rusia</option>
        <option value="US">Estados Unidos de América</option>
        <option value="GB">Reino Unido</option>
        <option value="FR">Francia</option>
        <option value="DE">Alemania</option>
        <option value="DK">Dinamarka</option>
        <option value="IS">Islandia</option>
      </SelectCountry>
    </form>
  );
};

export default Form;

Form.propTypes = {
  className: PropTypes.string
};
