/**
 * ************************************
 *
 * @module  Square
 * @description presentation component that displays the tic tac move (X or O)
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types'

const Square = ({ val, index, placeMarker }) => (
  <button className="box" index={index} onClick={() => placeMarker(index)}>
    {val}
  </button>
)

Square.propTypes = {
  val: PropTypes.string,
  index: PropTypes.number,
  placeMarker: PropTypes.func,
}

export default Square;