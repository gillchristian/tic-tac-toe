import R from 'ramda'

import { X, O, RESULTS } from '../constants/'

// Mark :: O|X

// isO :: Mark -> Bool
const isO = R.equals(O)
// isX :: Mark -> Bool
const isX = R.equals(X)

// genericCells :: Mark -> (Char -> Char)
const genericCells = (eq) => R.ifElse(
  R.equals(eq),
  () => '1',
  () => '.'
)

// genericBoard :: Mark -> ([Char] -> [Char])
const genericBoard = R.compose(R.map, genericCells)

// pickSerializer :: Mark -> ([Char] -> Char)
const pickSerializer = R.cond([
  [isO, () => R.compose(R.join(''), genericBoard(O))],
  [isX, () => R.compose(R.join(''), genericBoard(X))]
])

// serialize :: Mark -> [Char] -> String
const serialize = (mark, board) => pickSerializer(mark)(board)

// checkWinner :: Mark -> [Char] -> Bool
export const checkWinner = R.curry(R.compose(
  R.any(R.__, RESULTS),
  R.equals,
  serialize
))

