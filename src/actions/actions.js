/**
 * ************************************
 *
 * @module  actions.js
 * @description Action Creators
 *
 * ************************************
 */

import * as types from './actionTypes';

export const placeMove = (index) => ({
  type: types.PLACE_MOVE,
  payload: index,
})

export const checkForWinner = () => ({
  type: types.CHECK_FOR_WINNER,
})

export const checkForDraw = () => ({
  type: types.CHECK_FOR_DRAW,
})

export const newGame = () => ({
  type: types.NEW_GAME,
})