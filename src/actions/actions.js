/**
 * ************************************
 *
 * @module  actions.js
 * @description Action Creators
 *
 * ************************************
 */

import * as types from './actionTypes';

export const placeMarker = (index) => ({
  type: types.PLACE_MARKET,
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