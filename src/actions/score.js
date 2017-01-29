import { createAction } from 'redux-actions'

export const SCORE_INCREMENT = 'score:increment'

// incrementScore :: Mark -> Redux.Action
export const incrementScore = createAction(SCORE_INCREMENT)

