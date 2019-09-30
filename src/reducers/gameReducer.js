/**
 * ************************************
 *
 * @module gameReducer
 * @description reducer for the game
 *
 * ************************************
 */

import * as types from '../actions/actionTypes';

const initialState = {
  board: ['X', 'O', '', 'X', '', 'X', '', '', 'X']
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}

export default gameReducer;