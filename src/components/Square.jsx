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

const Square = ({ val, index, placeMove }) => (
  <button className="box" index={index} onClick={() => placeMove(index)}>
    {val}
  </button>
)

Square.propTypes = {
  val: PropTypes.string,
  index: PropTypes.number,
  placeMove: PropTypes.func,
}

export default Square;