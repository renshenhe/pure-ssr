/* @flow */

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../shared/state';

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined;
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  )
}

export default initStore;