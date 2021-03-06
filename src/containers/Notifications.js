import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Notifications from '../components/Notifications'
import EndingMessage from '../components/EndingMessage'

import { startGame } from '../actions/game'
import { isOver } from '../reducers/is-over'
import { getWinner } from '../reducers/winner'

const mapStateToProps = (state) => ({
  isOver: isOver(state),
  winner: getWinner(state)
})

const mapDispatchToProps = {
  startGame
}

export const NotificationsContainer = ({ isOver, startGame, winner }) => isOver
  ? <Notifications startGame={() => startGame(winner)}>
      <EndingMessage>{winner}</EndingMessage>
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

