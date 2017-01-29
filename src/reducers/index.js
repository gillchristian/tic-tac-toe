import { combineReducers } from 'redux'

import score from './score'
import next from './next'
import board from './board'
import isOverReducer from './is-over'
import winner from './winner'

export default combineReducers({
  score,
  next,
  board,
  isOver: isOverReducer,
  winner
})

