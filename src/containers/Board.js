import { connect } from 'react-redux'

import Board from '../components/Board'

import { addMark } from '../actions/game'

import { getBoard } from '../reducers/board'
import { getNext } from '../reducers/next'
import { getScore } from '../reducers/score'

const mapStateToProps = (state) => ({
  next: getNext(state),
  board: getBoard(state),
  score: getScore(state)
})

const mapDispatchToProps = {
  addMark
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

