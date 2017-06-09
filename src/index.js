import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { rehydrate } from 'glamor'

// rehydration has to be done before anything else
if (window._glam) {
  rehydrate(window._glam)
}

import App from './containers/App'
import './index.css'

import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

