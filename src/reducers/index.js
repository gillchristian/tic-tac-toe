import { combineReducers } from 'redux'

import score from './score'
import next from './next'

export default combineReducers({
  score,
  next
})

