import R from 'ramda'

import { createAction } from 'redux-actions'

import { getBoard } from '../reducers/board'
import { checkWinner, isFull } from '../utils/game'

export const ADD_MARK = 'game:add:mark'
export const FINISH_GAME = 'game:set:over'

// __addMark :: Mark -> Int -> Redux.Action
export const _addMark = createAction(
  ADD_MARK,
  (mark, pos) => ({mark, pos})
)

// finishGame :: Mark -> Redux.Action
export const finishGame = createAction(FINISH_GAME)


// addMark :: Mark -> Int -> (Store.dispatch -> Store.getState -> *)
export const addMark = (mark, pos) => (dispatch, getState) => {
  dispatch(_addMark(mark, pos)) // add the mark first

  const newBoard = getBoard(getState())

  R.cond([
    [R.flip(checkWinner), () => dispatch(finishGame(mark))],
    [isFull,              () => dispatch(finishGame(null))],
  ])(newBoard, mark)
}

