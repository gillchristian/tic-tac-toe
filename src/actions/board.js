import { createAction } from 'redux-actions'

export const CLEAR_BOARD = 'board:clear'

// clearBoard :: () -> Redux.Action
export const clearBoard = createAction(CLEAR_BOARD)

