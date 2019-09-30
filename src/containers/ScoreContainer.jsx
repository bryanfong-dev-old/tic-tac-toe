/**
 * ************************************
 *
 * @module  ScoreContainer
 * @description stateful component that renders the score board
 *
 * ************************************
 */

import React from 'react';
import Score from '../components/Score';

const ScoreContainer = () => (
  <div id="score">
    <Score />
    <Score />
  </div>
);


export default ScoreContainer;