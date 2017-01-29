import R from 'ramda'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Notifications from '../components/Notifications'

import { X, O } from '../constants'
import { isO, isX } from '../utils/game'

import { startGame } from '../actions/game'
import { isOver } from '../reducers/is-over'
import { getWinner } from '../reducers/winner'

const message = R.cond([
  [isO, R.always(`${O} wins!`)],
  [isX, R.always(`${X} wins!`)],
  [R.T, R.always('Its a draw!')]
])

const mapStateToProps = (state) => ({
  isOver: isOver(state),
  winner: getWinner(state)
})

const mapDispatchToProps = {
  startGame
}

const NotificationsContainer = ({ isOver, startGame, winner }) => isOver
  ? <Notifications startGame={startGame}>
      {message(winner)}
    </Notifications>
  : null

NotificationsContainer.propTypes = {
  isOver: PropTypes.bool,
  startGame: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationsContainer)

