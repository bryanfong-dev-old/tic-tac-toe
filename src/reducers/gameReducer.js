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
      if (newState.board[index] === '') {
        newState.board[index] = state.turn
        newState.turn = newState.turn === 'O' ? "X" : "O";
        return newState;
      } else {
        return state;
      }

    default:
      return state;
  }
}

export default gameReducer;