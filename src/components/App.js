import React  from 'react'

import Board from '../containers/Board'
import Notifications from '../containers/Notifications'
import AppStyleWrapper from './styled/AppStyleWrapper'

const App = () => (
  <AppStyleWrapper>
    <Notifications />
    <Board />
  </AppStyleWrapper>
)

export default App

