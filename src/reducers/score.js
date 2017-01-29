import R from 'ramda'

import { X, O } from '../constants'
import { FINISH_GAME } from '../actions/game'

export const SCORE_STATE = {
  [O]: 0,
  [X]: 0
}

export default function score(state = SCORE_STATE, action) {
  switch (action.type) {
    case FINISH_GAME:
      return R.evolve({[action.payload]: R.inc}, state)
    default:
      return state
  }
}

// --- selectors ---
export const getScore = R.prop('score')

export const getO = R.prop(O)
export const getX = R.prop(X)

