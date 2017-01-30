import reducer, * as i from './is-over'

import {
  finishGame,
  startGame
} from '../actions/game'

describe('isOver', () => {
  describe('reducer', () => {

    describe('FINISH_GAME', () => {
      it('set isOver to true', () => {
        const actual = reducer(false, finishGame(null))

        expect(actual).toBe(true)
      })
    })

    describe('START_GAME', () => {
      it('set isOver to false', () => {
        const actual = reducer(true, startGame(null))

        expect(actual).toBe(false)
      })
    })

  })

  describe('selector', () => {
    it('gets the isOver state space', () => {
      const actual = i.isOver({ isOver: true })

      expect(actual).toBe(true)
    })
  })
})

