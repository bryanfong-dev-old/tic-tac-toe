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
  active: true,
  turn: 'O',
  winner: '',
}

const winCombos = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]

const checkWinner = (board) => {
  for (let i = 0; i < winCombos.length; i++) {
    let combo = winCombos[i];
    if (board[combo[0]] !== '' || board[combo[1]] !== '' || board[combo[2]] !== '') {
      if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
        return board[combo[0]];
      }
    }
  }
  return ''
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.PLACE_MOVE:
      const newState = JSON.parse(JSON.stringify(state));
      const index = action.payload;

      if (newState.board[index] === '' && state.active) {
        newState.board[index] = state.turn
        newState.turn = newState.turn === 'O' ? "X" : "O";
        if (checkWinner(newState.board) !== '') newState.active = false;
        console.log('checkWinner(newState.board): ', checkWinner(newState.board));
        return newState;
      } else {
        return state;
      }

    default:
      return state;
  }
}

export default gameReducer;