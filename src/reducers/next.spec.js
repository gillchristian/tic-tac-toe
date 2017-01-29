import reducer, * as n from './next'

import { _addMark } from '../actions/game'

import { X, O } from '../constants'

describe('next', () => {
  describe('reducer', () => {

    describe('ADD_MARK case', () => {
      it('sets the next mark to be used, inverting the provided one', () => {
        let actual = reducer(X, _addMark(X, 1))
        expect(actual).toBe(O)

        actual = reducer(O, _addMark(O, 1))
        expect(actual).toBe(X)

        actual = reducer(X, _addMark(O, 1))
        expect(actual).toBe(X)
      })
    })

    it('returns the state if the provided mark is not a Mark', () => {
        let actual = reducer(X, _addMark('a', 1))
        expect(actual).toBe(X)

        actual = reducer(O, _addMark('a', 1))
        expect(actual).toBe(O)
    })

  })

  describe('selector', () => {

    describe('getNext', () => {
      it('gets the "next" state space', () => {
        let actual = n.getNext({next: X})
        expect(actual).toBe(X)

        actual = n.getNext({next: O})
        expect(actual).toBe(O)
      })
    })

  })
})

