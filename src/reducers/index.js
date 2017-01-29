import { combineReducers } from 'redux'

import score from './score'
import next from './next'
import board from './board'

export default combineReducers({
  score,
  next,
  board
})

