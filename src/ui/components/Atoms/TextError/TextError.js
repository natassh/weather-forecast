import React from 'react';
import PropTypes from 'prop-types';

import './TextError.css';

const TextError = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

export default TextError;

TextError.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
