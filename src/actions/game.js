import { createAction } from 'redux-actions'

export const ADD_MARK = 'game:add:mark'

// addMark :: Mark -> Int -> Redux.Action
export const addMark = createAction(
  ADD_MARK,
  (mark, position) => ({mark, position})
)

