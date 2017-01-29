import R from 'ramda'

import { ADD_MARK } from '../actions/game'
import { CLEAR_BOARD } from '../actions/board'

export const BOARD_STATE = [
  '', '', '',
  '', '', '',
  '', '', ''
]

const getMark = R.path(['payload', 'mark'])
const getPos = R.path(['payload', 'pos'])

export default function board(state = BOARD_STATE, action) {
  switch(action.type) {
    case ADD_MARK:
      return R.update(getPos(action), getMark(action), state)
    case CLEAR_BOARD:
      return BOARD_STATE
    default:
      return state
  }
}

// --- selectors ---
export const getBoard = R.prop('board')

