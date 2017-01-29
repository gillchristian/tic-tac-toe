import React, { PropTypes } from 'react'

import Alert from './styled/Alert'
import Button from './styled/Button'


const Notifications = ({ startGame, children }) => (
  <Alert>
    <span>{children}</span>
    <Button onClick={
      () => {
        console.log('so?')
        startGame()
      }
    }>Play Again</Button>
  </Alert>
)

Notifications.propTypes = {
  startGame: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default Notifications
