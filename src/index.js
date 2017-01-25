import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

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
  <App marks={marks} next="●" />,
  document.getElementById('root')
)

