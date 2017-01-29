import reducer, * as b from './board'

import { X, O } from '../constants'
import { addMark } from '../actions/game'

describe('board', () => {
  describe('reducer', () => {

    describe('ADD_MARK', () => {
      it('adds the provided mark on the provided position', () => {
        let actual = reducer(b.BOARD_STATE, addMark(X, 0))
        expect(actual).toMatchSnapshot()

        actual = reducer(actual, addMark(O, 1))
        expect(actual).toMatchSnapshot()

        actual = reducer(actual, addMark(X, 2))
        expect(actual).toMatchSnapshot()

        actual = reducer(actual, addMark(O, 3))
        expect(actual).toMatchSnapshot()

        actual = reducer(actual, addMark(X, 4))
        expect(actual).toMatchSnapshot()

        actual = reducer(actual, addMark(O, 5))
        expect(actual).toMatchSnapshot()

        actual = reducer(actual, addMark(X, 6))
        expect(actual).toMatchSnapshot()

        actual = reducer(actual, addMark(O, 7))
        expect(actual).toMatchSnapshot()

        actual = reducer(actual, addMark(X, 8))
        expect(actual).toMatchSnapshot()
      })
    })

  })

  describe('selector', () => {
    const STATE = { board: b.BOARD_STATE }

    describe('getBoard', () => {
      it('gets the board state space', () => {
        expect(b.getBoard(STATE)).toEqual(b.BOARD_STATE)
      })
    })

  })
})

