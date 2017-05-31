import React from 'react'
import PropTypes from 'prop-types'

import Alert from './styled/Alert'
import Button from './styled/Button'


const Notifications = ({ startGame, children }) => (
  <Alert>
    <span>{children}</span>
    <Button onClick={startGame}>New Game</Button>
  </Alert>
)

Notifications.propTypes = {
  startGame: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Notifications

