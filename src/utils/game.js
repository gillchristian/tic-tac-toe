import R from 'ramda'

import { X, O, s, RESULTS } from '../constants/'

// Mark :: O|X

// isO :: Mark -> Bool
const isO = R.equals(O)
// isX :: Mark -> Bool
const isX = R.equals(X)

// genericCells :: Mark -> (Char -> Char)
const genericCells = (m) => R.cond([
  [R.equals(s), () => '.'],
  [R.equals(m), () => '1'],
  [R.T,         R.identity]
])

// genericBoard :: Mark -> ([Char] -> [Char])
const genericBoard = R.compose(R.map, genericCells)

// pickSerializer :: Mark -> ([Char] -> Char)
const pickSerializer = R.cond([
  [isO, () => R.compose(R.join(''), genericBoard(O))],
  [isX, () => R.compose(R.join(''), genericBoard(X))]
])

// serialize :: Mark -> [Char] -> String
export const serialize = (mark, board) => pickSerializer(mark)(board)

// checkWinner :: Mark -> [Char] -> Bool
export const checkWinner = R.curry((mark, board) => R.any(
  R.test(R.__, serialize(mark, board)),
  RESULTS
))

