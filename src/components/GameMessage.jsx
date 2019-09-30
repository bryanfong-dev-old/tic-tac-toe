/**
 * ************************************
 *
 * @module  GameMessage
 * @description presentation component that displays which player wins or tie
 *
 * ************************************
 */

import React from 'react';

const GameMessage = ({ message }) => (
  <h2>{message}</h2>
)

export default GameMessage;