import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './InputCity.css';

const InputCity = ({ onChange }) => {
  const [state, setState] = useState({
    valueInput: ''
  });

  const handleChange = e => {
    const newValueInput = e.target.value;
    setState({ valueInput: newValueInput });

    onChange(newValueInput);
  };

  //const { valueInput } = state;
  return (
    <input
      className="Form__InputCity"
      type="text"
      placeholder="Ciudad"
      value={state.valueInput}
      onChange={handleChange}
    />
  );
};

export default InputCity;

InputCity.propTypes = {
  onChange: PropTypes.func
};
