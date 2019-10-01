/**
 * ************************************
 *
 * @module  GameMessageComponent
 * @description presentation component that displays which player wins or tie
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types'

const GameMessage = ({ message }) => (
  <h2>{message}</h2>
)

GameMessage.propTypes = {
  message: PropTypes.string,
}

export default GameMessage;