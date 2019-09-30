/**
 * ************************************
 *
 * @module  Button
 * @description reusable button component that takes in a parameter and function
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ text, func }) => (
  <button onClick={() => func()}>
    {text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string,
  func: PropTypes.func,
}

export default Button;