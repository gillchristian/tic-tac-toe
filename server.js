import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './src/reducers'
import App from './src/components/App'

const assets = require('./docs/asset-manifest.json')

const app = Express()

const port = process.env.PORT || 3000

//const basePath = process.env.NODE_ENV === 'production' ? '' : '/tic-tac-toe'
const basePath = '/tic-tac-toe'

//Serve static files
app.use(`${basePath}/static`, Express.static('docs/static'));

// This is fired every time the server side receives a request
app.use(handleRender)

app.listen(port)

// -------------- handlers & helpers --------------

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(rootReducer)

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Tic Tac Toe</title>
        <link href="https://fonts.googleapis.com/css?family=Gochi+Hand" rel="stylesheet">
        <link href="${basePath}/${assets['main.css']}" rel="stylesheet">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script type="text/javascript" src="${basePath}/${assets['main.js']}"></script>
      </body>
    </html>
    `
}

