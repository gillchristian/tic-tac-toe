import R from 'ramda'

import {
  _addMark,
  startGame,
  finishGame,
  addMark
} from './game'

import { X, O, s } from '../constants'

describe('_addMark', function () {
  it('creates a add-mark action', () => {
    let actual = _addMark(O, 1)
    expect(actual).toMatchSnapshot()

    actual = _addMark(X, 0)
    expect(actual).toMatchSnapshot()

    actual = _addMark('✓', 5)
    expect(actual).toMatchSnapshot()
  })
})

describe('finishGame', () => {
  it('creates a finish-game action', () =>  {
    let actual = finishGame(O)
    expect(actual).toMatchSnapshot()

    actual = finishGame(X)
    expect(actual).toMatchSnapshot()

    actual = finishGame(null)
    expect(actual).toMatchSnapshot()
  })
})

describe('startGame', () => {
  it('creates a start-game action', () =>  {
    const actual = startGame()
    expect(actual).toMatchSnapshot()
  })
})

describe('addMark', () => {
  const EMPTY_BOARD = {
    board: [
      s, s, s,
      s, s, s,
      s, s, s
    ]
  }

  const O_WINS = {
    board: [
      O, X, s,
      s, O, X,
      s, s, O
    ]
  }

  const DRAW = {
    board: [
      O, X, O,
      X, O, X,
      X, O, X
    ]
  }

  it('only dispatches add-mark when the board is not full or anybody wins', () => {
    const dispatch = jest.fn()
    const getState = jest.fn(R.always(EMPTY_BOARD))

    addMark(X, 1)(dispatch, getState)

    expect(getState).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(_addMark(X, 1))
  })

  it('dispatches a finish-game with the winner mark', () => {
    const dispatch = jest.fn()
    const getState = jest.fn(R.always(O_WINS))

    addMark(O, 8)(dispatch, getState)

    expect(getState).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith(_addMark(O, 8))
    expect(dispatch).toHaveBeenCalledWith(finishGame(O))
  })

  it('dispatches a finish-game with null when game ends in a draw', () => {
    const dispatch = jest.fn()
    const getState = jest.fn(R.always(DRAW))

    addMark(X, 1)(dispatch, getState)

    expect(getState).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith(_addMark(X, 1))
    expect(dispatch).toHaveBeenCalledWith(finishGame(null))
  })
})

