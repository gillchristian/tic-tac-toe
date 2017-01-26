import reducer, * as s from './score'
import { incrementScore } from '../actions/score'

import { X, O } from '../constants'

describe('score', () => {

  describe('reducer', () => {
    it('increments the score of the provided mark', () => {
      expect(s.SCORE_STATE[O]).toBe(0)
      expect(s.SCORE_STATE[X]).toBe(0)

      let action = incrementScore(O)

      let state = reducer(s.SCORE_STATE, action)

      expect(state[O]).toBe(1)
      expect(state[X]).toBe(0)

      action = incrementScore(X)

      state = reducer(s.SCORE_STATE, action)

      expect(state[O]).toBe(0)
      expect(state[X]).toBe(1)
    })

    it('does not add a new mark other than X & O', () => {
      const action = incrementScore('✓')

      const state = reducer(s.SCORE_STATE, action)

      expect(state).toEqual(s.SCORE_STATE)
    })
  })

  describe('selectors', () => {
    const SCORE = {
        [X]: 1,
        [O]: 0
      }
    const STATE = {
      score: SCORE
    }

    describe('getScore', () => {
      it('selects the score state space', () => {
        const actual = s.getScore(STATE)

        expect(actual).toEqual(SCORE)
      })
    })

    describe('getO & getX', () => {
      it('get the score for its mark', () => {
        const score = s.getScore(STATE)

        expect(s.getO(score)).toBe(0)
        expect(s.getX(score)).toBe(1)
      })
    })
  })

})

