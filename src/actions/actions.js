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
  type: types.PLACE_MARKER,
  payload: index,
})

export const declareWinner = (winner) => ({
  type: types.DECLARE_WINNER,
  payload: winner,
})

export const checkForDraw = () => ({
  type: types.CHECK_FOR_DRAW,
})

export const newGame = () => ({
  type: types.NEW_GAME,
})