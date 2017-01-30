import R from 'ramda'

import { FINISH_GAME } from '../actions/game'

import { isMark } from '../utils/game'

export const WINNER_STATE = null

export default function winner(state = WINNER_STATE, action) {
  switch(action.type) {
    case FINISH_GAME:
      return R.ifElse(
        isMark,
        R.identity,
        R.always(null)
      )(action.payload)
    default:
      return state
  }
}

// --- selectors ---

export const getWinner = R.prop('winner')

