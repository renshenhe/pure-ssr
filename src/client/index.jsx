/* flow */

import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { isProd, APP_CONTAINER_SELECTOR } from '../shared/config';
import rootReducer from '../shared/state';

import App from '../shared/App';

const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

const wrappedApp = (AppComponent, reduxStore: ?Object) => (
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>
  </Provider>
);

render(wrappedApp(App, store), rootEl);

if (module.hot) {
  module.hot.accept('../shared/App', () => {
    const NextApp = require('../shared/App').default;

    render(wrappedApp(NextApp, store), rootEl);
  })
}