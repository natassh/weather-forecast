import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './InputCity.css';

const InputCity = ({ onChange }) => {
  const [valueInput, setvalueInput] = useState('');

  const handleChange = e => {
    const value = e.target.value;
    setvalueInput({ valueInput: value });

    onChange(value);
  };

  return (
    <>
      <label>Ciudad:</label>
      <input
        className="Form__InputCity"
        type="text"
        value={valueInput.state}
        onChange={handleChange}
      />
    </>
  );
};

export default InputCity;

InputCity.propTypes = {
  onChange: PropTypes.func
};
