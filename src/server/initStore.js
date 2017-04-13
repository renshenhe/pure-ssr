// @flow

// import Immutable from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../shared/state';

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined;

  // if (plainPartialState && plainPartialState.hello) {
  //   preloadedState.hello = helloReducer(undefined, {})
  //     .merge(Immutable.fromJS(plainPartialState.hello))
  // }

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  )
}

export default initStore;