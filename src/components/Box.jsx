/**
 * ************************************
 *
 * @module  Box
 * @description presentation component that displays the tic tac move (X or O)
 *
 * ************************************
 */

import React from 'react';

const Box = ({ value }) => (
  <button className="box">
    {value}
  </button>
)

export default Box;