import R from 'ramda'

import { X, O, s, RESULTS } from '../constants/'

// Mark :: O|X

// isO :: Mark -> Bool
export const isO = R.equals(O)
// isX :: Mark -> Bool
export const isX = R.equals(X)

// isMark :: Mark -> Bool
export const isMark = R.either(isO, isX)

// invert :: Mark -> Mark
export const invert = R.cond([
  [isO, R.always(X)],
  [isX, R.always(O)]
])

// genericCells :: Mark -> (Char -> Char)
const genericCells = (m) => R.cond([
  [R.equals(s), R.always('.')],
  [R.equals(m), R.always('1')],
  [R.T,         R.identity]
])

// genericBoard :: Mark -> ([Char] -> String)
const genericBoard = R.compose(R.map, genericCells)

//serializeOBoard :: [Char] -> String
const serializeOBoard = R.compose(R.join(''), genericBoard(O))
//serializeXBoard :: [Char] -> String
const serializeXBoard = R.compose(R.join(''), genericBoard(X))

// pickSerializer :: Mark -> ([Char] -> Char)
const pickSerializer = R.cond([
  [isO, R.always(serializeOBoard)],
  [isX, R.always(serializeXBoard)]
])

// serialize :: [Char] -> Mark -> String
export const serialize = (board, mark) => pickSerializer(mark)(board)

// checkWinner :: [Char] -> Mark -> Bool
export const checkWinner = (board, mark) => R.any(
  R.test(R.__, serialize(board, mark)),
  RESULTS
)

// isFull :: [Char] -> Bool
export const isFull = R.all(isMark)

