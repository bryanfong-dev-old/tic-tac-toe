/**
 * ************************************
 *
 * @module  reducers
 * @description combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import scoreReducer from './scoreReducer'

const reducers = combineReducers({
  game: gameReducer,
  score: scoreReducer,
});

export default reducers;
