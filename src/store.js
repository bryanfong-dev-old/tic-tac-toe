/**
 * ************************************
 *
 * @module  store.js
 * @description Redux's single source of truth
 *
 * ************************************
 */

import { createStore } from 'redux';
import reducers from './reducers/reducers'

const store = createStore(reducers);

export default store;
