import { createAction } from 'redux-actions'

export const SCORE_INCREMENT = 'score:increment'

// incrementScore :: X|O -> Redux.ActionObject
export const incrementScore = createAction(SCORE_INCREMENT)

