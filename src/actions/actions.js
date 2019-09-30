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