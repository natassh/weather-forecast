import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './SelectCountry.css';

const SelectCountry = ({ id, value, onChange, children }) => {
  return (
    <>
      <label>Selecciona un país:</label>
      <select
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="Form__SelectCountry"
      >
        {children}
      </select>
    </>
  );
};

export default SelectCountry;

SelectCountry.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node
};
