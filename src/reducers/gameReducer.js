/**
 * ************************************
 *
 * @module gameReducer
 * @description reducer for the game
 *
 * ************************************
 */

import * as types from '../actions/actionTypes';
import checkWinner from '../utils/checkWinner';

const initialState = {
  board: ['', '', '', '', '', '', '', '', ''],
  active: true,
  turn: 'O',
  winner: '',
  moves: 0,
  p1_score: 0,
  cpu_score: 0,
}

const gameReducer = (state = initialState, action) => {
  let newState;
  let index;

  switch (action.type) {
    case types.NEW_GAME:
      newState = JSON.parse(JSON.stringify(state));
      newState.board = ['', '', '', '', '', '', '', '', ''];
      newState.active = true;
      newState.turn = 'O';
      newState.winner = '';
      newState.moves = 0;
      return newState;

    case types.PLACE_MARKER:
      newState = JSON.parse(JSON.stringify(state));
      index = action.payload;
      if (newState.board[index] === '' && state.active) {
        newState.board[index] = state.turn
        newState.turn = newState.turn === 'O' ? "X" : "O";
        newState.moves += 1;
        return newState;
      } else {
        return state;
      }

    case types.CHECK_FOR_WINNER:
      if (checkWinner(state.board)) {
        if (checkWinner(state.board) === "X") {
          return { ...state, winner: "X", active: false, cpu_score: state.cpu_score + 1 }
        } else if (checkWinner(state.board) === "O") {
          return { ...state, winner: "O", active: false, p1_score: state.p1_score + 1 }
        }
      } else {
        return state;
      }

    case types.CHECK_FOR_DRAW:
      if (state.moves === 9 && state.winner === '') {
        return { ...state, winner: "Tie", active: false }
      }

    default:
      return state;
  }
}

export default gameReducer;