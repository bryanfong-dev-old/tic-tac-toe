/**
 * ************************************
 *
 * @module  Box
 * @description presentation component that displays the tic tac move (X or O)
 *
 * ************************************
 */

import React from 'react';

const Box = ({ val, i }) => (
  <button className="box">
    {val}
  </button>
)

export default Box;