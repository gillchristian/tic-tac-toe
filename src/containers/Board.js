import { connect } from 'react-redux'

import Board from '../components/Board'

import { addMark } from '../actions/game'

import { getBoard } from '../reducers/board'
import { isOver } from '../reducers/is-over'
import { getNext } from '../reducers/next'
import { getScore } from '../reducers/score'

const mapStateToProps = (state) => ({
  isOver: isOver(state),
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

