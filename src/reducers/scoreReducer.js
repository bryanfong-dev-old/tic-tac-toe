/**
 * ************************************
 *
 * @module scoreReducer
 * @description reducer for the score
 *
 * ************************************
 */

import * as types from '../actions/actionTypes';

const initialState = {
  p1: 0,
  cpu: 0,
}

const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default scoreReducer;