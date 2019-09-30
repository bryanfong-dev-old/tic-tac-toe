/**
 * ************************************
 *
 * @module  Score
 * @description presentation component that displays the scores for both players
 *
 * ************************************
 */

import React from 'react';

const Score = ({ name, score }) => (
  <div>
    <h2>{name} : {score}</h2>
  </div>
)

export default Score;