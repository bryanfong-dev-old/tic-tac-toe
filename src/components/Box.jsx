/**
 * ************************************
 *
 * @module  Box
 * @description presentation component that displays the tic tac move (X or O)
 *
 * ************************************
 */

import React from 'react';

const Box = ({ val, i, placeMove }) => (
  <button className="box" index={i} onClick={() => placeMove(i)}>
    {val}
  </button>
)

export default Box;