import R from 'ramda'
import {
  checkWinner,
  serialize,
  invert,
  isMark,
  isFull
} from './game'

import { X, O, s, RESULTS } from '../constants/'

const cases = [
  {
    board: R.flatten([
      [s, s, s],
      [s, s, s],
      [s, s, s]
    ]),
    lastMove: O,
    expected: false,
    serialized: '.........'
  },
  {
    board: R.flatten([
      [s, s, s],
      [s, s, s],
      [s, s, s]
    ]),
    lastMove: X,
    expected: false,
    serialized: '.........'
  },
  {
    board: R.flatten([
      [s, s, s],
      [s, O, s],
      [s, s, s]
    ]),
    lastMove: O,
    expected: false,
    serialized: '....1....'
  },
  {
    board: R.flatten([
      [s, s, s],
      [s, X, s],
      [s, s, s]
    ]),
    lastMove: X,
    expected: false,
    serialized: '....1....'
  },
  {
    board: R.flatten([
      [X, s, s],
      [s, X, s],
      [s, s, X]
    ]),
    lastMove: X,
    expected: true,
    serialized: '1...1...1'
  },
  {
    board: R.flatten([
      [s, s, O],
      [s, O, s],
      [O, s, s]
    ]),
    lastMove: X,
    expected: false,
    serialized: '..●.●.●..'
  },
  {
    board: R.flatten([
      [s, s, O],
      [s, O, s],
      [O, s, s]
    ]),
    lastMove: O,
    expected: true,
    serialized: '..1.1.1..'
  },
  {
    board: R.flatten([
      [O, s, X],
      [O, s, X],
      [O, s, X]
    ]),
    lastMove: O,
    expected: true,
    serialized: '1.✖1.✖1.✖'
  },
  {
    board: R.flatten([
      [O, s, X],
      [O, s, X],
      [O, s, X]
    ]),
    lastMove: X,
    expected: true,
    serialized: '●.1●.1●.1'
  },
  {
    board: R.flatten([
      [O, O, O],
      [X, X, X],
      [s, s, s]
    ]),
    lastMove: O,
    expected: true,
    serialized: '111✖✖✖...'
  },
  {
    board: R.flatten([
      [O, O, O],
      [X, X, X],
      [s, s, s]
    ]),
    lastMove: X,
    expected: true,
    serialized: '●●●111...'
  },
  {
    board: R.flatten([
      [O, X, O],
      [X, O, X],
      [X, O, X]
    ]),
    lastMove: X,
    expected: false,
    serialized: '●1●1●11●1'
  },
  {
    board: R.flatten([
      [O, X, O],
      [X, O, X],
      [X, O, X]
    ]),
    lastMove: X,
    expected: false,
    serialized: '●1●1●11●1'
  },
  {
    board: R.flatten([
      [O, O, X],
      [O, X, X],
      [X, O, X]
    ]),
    lastMove: X,
    expected: true,
    serialized: '●●1●111●1'
  },
  {
    board: R.flatten([
      [X, s, O],
      [O, O, s],
      [X, X, X]
    ]),
    lastMove: X,
    expected: true,
    serialized: '1.●●●.111'
  },
  {
    board: R.flatten([
      [O, O, O],
      [O, O, O],
      [O, O, O]
    ]),
    lastMove: X,
    expected: false,
    serialized: '●●●●●●●●●'
  },
  {
    board: R.flatten([
      [O, O, O],
      [O, O, O],
      [O, O, O]
    ]),
    lastMove: O,
    expected: true,
    serialized: '111111111'
  },
]

describe('game', () => {

  describe('invert', () => {
    it('returns the oposite mark', () => {
      expect(invert(O)).toBe(X)
      expect(invert(X)).toBe(O)
    })
  })

  describe('checkWinner', () => {
    it('check if the provided mark wins the game', () => {
      cases.forEach(_case => {
        const actual = checkWinner(_case.lastMove, _case.board)
        expect(actual).toBe(_case.expected)
      })
    })
  })

  describe('serialize', () => {
    it('serializes the board into a string, replacing empty cells for dots & current mark for 1s', () => {
      cases.forEach(_case => {
        const actual = serialize(_case.lastMove, _case.board)
        expect(actual).toBe(_case.serialized)
      })
    })
  })

  describe('isMark', () => {
    it('checks if the provided value is a Mark (X|O)', () => {
      expect(isMark(O)).toBe(true)
      expect(isMark(X)).toBe(true)
      expect(isMark('a')).toBe(false)
    })
  })

  describe('isFull', () => {
    it('check if a board is full', () => {
      let actual = isFull(R.flatten([
        [O, X, O],
        [X, O, X],
        [X, O, X]
      ]))

      expect(actual).toBe(true)

      actual = isFull(R.flatten([
        [O, O, O],
        [O, O, O],
        [O, O, O]
      ]))

      expect(actual).toBe(true)

      actual = isFull(R.flatten([
        [s, X, O],
        [X, O, X],
        [X, O, X]
      ]))

      expect(actual).toBe(false)
    })
  })

})

