// @flow

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

import initStore from './initStore';
import App from './../shared/App';
import { isProd, APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config';

import Helmet from 'react-helmet';

const renderApp = (location: string, plainPartialState: ?Object, routerContext: ?Object = {}) => {
  const store = initStore(plainPartialState);
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={routerContext}>
        <App />
      </StaticRouter>
    </Provider>
  )

  /** 
    Helmet.rewind() MUST come after ReactDOMServer.renderToString().
  **/
  const head = Helmet.rewind();
  return (
    `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
    )
}

export default renderApp;