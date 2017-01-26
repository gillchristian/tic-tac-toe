import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import './index.css'

import { X, O } from './constants'

import store from './store'

const marks = [
  X,
  '',
  O,
  '',
  O,
  '',
  '',
  '',
  '',
]

ReactDOM.render(
  <Provider store={store}>
    <App marks={marks} next={O} />
  </Provider>,
  document.getElementById('root')
)

