import * as types from '../actions/actionTypes';
import { switchCase } from '@babel/types';

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