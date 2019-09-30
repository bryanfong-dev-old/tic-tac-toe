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
  board: ['', '', '', '', '', '', '', '', ''],
  active: true,
  turn: 'O',
  winner: '',
  moves: 0,
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
  return;
}

const gameReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case types.PLACE_MOVE:
      newState = JSON.parse(JSON.stringify(state));
      const index = action.payload;
      if (newState.board[index] === '' && state.active) {
        newState.board[index] = state.turn
        newState.turn = newState.turn === 'O' ? "X" : "O";
        newState.moves += 1;
        console.log(newState);
        return newState;
      } else {
        return state;
      }

    case types.CHECK_WINNER:
      if (checkWinner(state.board)) {
        if (checkWinner(state.board) === "X") {
          return { ...state, winner: "X", active: false }
        } else {
          return { ...state, winner: "O", active: false }
        }
      } else {
        return state;
      }

    case types.CHECK_FOR_DRAW:
      if (state.moves === 9) {
        return { ...state, winner: "Tie", active: false }
      }

    default:
      return state;
  }
}

export default gameReducer;