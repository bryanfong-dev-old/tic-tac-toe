/**
 * ************************************
 *
 * @module  Score
 * @description presentation component that displays the scores for both players
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types'

const Score = ({ player, score }) => (
  <h2>
    {player} : {score}
  </h2>
)

Score.propTypes = {
  player: PropTypes.string,
  score: PropTypes.number,
}

export default Score;