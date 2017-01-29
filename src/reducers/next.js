import R from 'ramda'

import { invert, isMark } from '../utils/game'
import { X } from '../constants'

import { ADD_MARK } from '../actions/game'

export const NEXT_STATE = X

const getMark = R.path(['payload', 'mark'])

export default function next(state = NEXT_STATE, action) {
  switch(action.type) {
    case ADD_MARK:
      return R.ifElse(
        isMark,
        invert,
        () => state
      )(getMark(action))
    default:
      return state
  }
}


// --- selectors ---
export const getNext = R.prop('next')

