import React  from 'react'
import { ThemeProvider } from 'styled-components'

import Board from '../containers/Board'
import Notifications from '../containers/Notifications'
import AppStyleWrapper from './styled/AppStyleWrapper'
import ThemeSwitcher from './ThemeSwitcher.js'

const App = ({ toggleTheme, theme }) => (
  <ThemeProvider theme={theme}>
    <AppStyleWrapper>
      <Notifications />
      <Board />
      <ThemeSwitcher switchTheme={toggleTheme} current={theme.name} />
    </AppStyleWrapper>
  </ThemeProvider>
)

export default App

