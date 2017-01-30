import R from 'ramda'

import { invert, isMark } from '../utils/game'
import { X } from '../constants'

import { ADD_MARK, START_GAME } from '../actions/game'

export const NEXT_STATE = X

const getMark = R.path(['payload', 'mark'])
const getPayload = R.prop('payload')

export default function next(state = NEXT_STATE, action) {
  switch(action.type) {
    case ADD_MARK:
      return R.ifElse(
        isMark,
        invert,
        R.always(state)
      )(getMark(action))
    case START_GAME:
      return R.ifElse(
        isMark,
        R.identity,
        R.always(state)
      )(getPayload(action))
    default:
      return state
  }
}


// --- selectors ---
export const getNext = R.prop('next')

