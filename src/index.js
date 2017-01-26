import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import './index.css'

import store from './store'

const marks = [
  '✖',
  '',
  '●',
  '',
  '✖',
  '',
  '',
  '',
  '',
]

ReactDOM.render(
  <Provider store={store}>
    <App marks={marks} next="●" />
  </Provider>,
  document.getElementById('root')
)

