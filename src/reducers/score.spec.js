import reducer, * as s from './score'

import { finishGame } from '../actions/game'

import { X, O } from '../constants'

describe('score', () => {
  describe('reducer', () => {

    describe('SCORE_INCREMENT', () => {
      it('increments the score of the provided mark', () => {
        expect(s.SCORE_STATE[O]).toBe(0)
        expect(s.SCORE_STATE[X]).toBe(0)

        let action = finishGame(O)

        let state = reducer(s.SCORE_STATE, action)

        expect(state[O]).toBe(1)
        expect(state[X]).toBe(0)

        action = finishGame(X)

        state = reducer(s.SCORE_STATE, action)

        expect(state[O]).toBe(0)
        expect(state[X]).toBe(1)
      })

      it('does not add a new mark other than X & O', () => {
        const action = finishGame('✓')

        const state = reducer(s.SCORE_STATE, action)

        expect(state).toEqual(s.SCORE_STATE)
      })
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

