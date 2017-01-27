import R from 'ramda'
import { checkWinner } from './game'

import { X, O, s, RESULTS } from '../constants/'

const cases = [
  {
    board: R.flatten([
      [s, s, s],
      [s, s, s],
      [s, s, s]
    ]),
    lastMove: O,
    expected: false
  },
  {
    board: R.flatten([
      [s, s, s],
      [s, s, s],
      [s, s, s]
    ]),
    lastMove: X,
    expected: false
  },
  {
    board: R.flatten([
      [s, s, s],
      [s, O, s],
      [s, s, s]
    ]),
    lastMove: O,
    expected: false
  },
  {
    board: R.flatten([
      [s, s, s],
      [s, X, s],
      [s, s, s]
    ]),
    lastMove: X,
    expected: false
  },
  {
    board: R.flatten([
      [X, s, s],
      [s, X, s],
      [s, s, X]
    ]),
    lastMove: X,
    expected: true
  },
  {
    board: R.flatten([
      [s, s, O],
      [s, O, s],
      [O, s, s]
    ]),
    lastMove: X,
    expected: false
  },
  {
    board: R.flatten([
      [s, s, O],
      [s, O, s],
      [O, s, s]
    ]),
    lastMove: O,
    expected: true
  },
  {
    board: R.flatten([
      [O, s, X],
      [O, s, X],
      [O, s, X]
    ]),
    lastMove: O,
    expected: true
  },
  {
    board: R.flatten([
      [O, s, X],
      [O, s, X],
      [O, s, X]
    ]),
    lastMove: X,
    expected: true
  },
  {
    board: R.flatten([
      [O, O, O],
      [X, X, X],
      [s, s, s]
    ]),
    lastMove: O,
    expected: true
  },
  {
    board: R.flatten([
      [O, O, O],
      [X, X, X],
      [s, s, s]
    ]),
    lastMove: X,
    expected: true
  },
  {
    board: R.flatten([
      [O, X, O],
      [X, O, X],
      [X, O, X]
    ]),
    lastMove: X,
    expected: false
  },
  {
    board: R.flatten([
      [O, X, O],
      [X, O, X],
      [X, O, X]
    ]),
    lastMove: X,
    expected: false
  },
]

describe('checkWinner', () => {

  it('check if the provided mark wins the game', () => {
    cases.forEach(_case => {
      const actual = checkWinner(_case.lastMove, _case.board)
      expect(actual).toBe(_case.expected)
    })
  })

})

