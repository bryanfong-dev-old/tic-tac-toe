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
  board: ['X', '', '', '', '', '', '', '', ''],
  turn: 'O',
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.PLACE_MOVE:
      const newState = JSON.parse(JSON.stringify(state));
      const index = action.payload;
      console.log(index);
      newState.board[index] = state.turn
      console.log(newState.board);
      return newState;

    default:
      return state;
  }
}

export default gameReducer;