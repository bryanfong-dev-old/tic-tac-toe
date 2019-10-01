/**
 * ************************************
 *
 * @module  SquareComponent
 * @description presentation component that displays the tic tac move (X or O)
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types'

const Square = ({ marker, index, placeMarker }) => (
  <button className="box" index={index} onClick={() => placeMarker(index)}>
    {marker}
  </button>
)

Square.propTypes = {
  marker: PropTypes.string,
  index: PropTypes.number,
  placeMarker: PropTypes.func,
}

export default Square;