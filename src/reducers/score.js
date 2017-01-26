import R from 'ramda'

import { X, O } from '../constants'
import { SCORE_INCREMENT } from '../actions/score'

export const SCORE_STATE = {
  [O]: 0,
  [X]: 0
}

export default function score(state = SCORE_STATE, action) {
  switch (action.type) {
    case SCORE_INCREMENT:
      return R.evolve({[action.payload]: R.inc}, state)
    default:
      return state
  }
}

// --- selectors ---
export const getScore = R.prop('score')

export const getO = R.prop(O)
export const getX = R.prop(X)

