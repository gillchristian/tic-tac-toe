import R from 'ramda'

import { FINISH_GAME, START_GAME } from '../actions/game'

export const IS_OVER_STATE = false

export default function isOverReducer(state = IS_OVER_STATE, action) {
  switch(action.type) {
    case FINISH_GAME:
      return true
    case START_GAME:
      return false
    default:
      return state
  }
}

// --- selectors ---

export const isOver = R.prop('isOver')

