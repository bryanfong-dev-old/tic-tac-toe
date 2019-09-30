/**
 * ************************************
 *
 * @module  Box
 * @description presentation component that displays the tic tac move (X or O)
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types'

const Box = ({ val, index, placeMove }) => (
  <button className="box" index={index} onClick={() => placeMove(index)}>
    {val}
  </button>
)

Box.propTypes = {
  val: PropTypes.string,
  i: PropTypes.number,
  placeMove: PropTypes.func,
}

export default Box;