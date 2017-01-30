import reducer, * as w from './winner'

import { X, O } from '../constants'
import { finishGame } from '../actions/game'

describe('winner', () => {
  describe('reducer', () => {

    describe('FINISH_GAME', () => {
      it('sets the winner', () => {
        let actual = reducer(null, finishGame(X))

        expect(actual).toBe(X)

        actual = reducer(X, finishGame(O))

        expect(actual).toBe(O)

        actual = reducer(X, finishGame())

        expect(actual).toBe(null)

        actual = reducer(X, finishGame('s'))

        expect(actual).toBe(null)
      })
    })

  })

  describe('selector', () => {
    it('gets the winner state space', () => {
      const actual = w.getWinner({ winner: X })

      expect(actual).toBe(X)
    })
  })
})
