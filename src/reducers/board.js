import R from 'ramda'

import { ADD_MARK, START_GAME } from '../actions/game'

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
    case START_GAME:
      return BOARD_STATE
    default:
      return state
  }
}

// --- selectors ---
export const getBoard = R.prop('board')

