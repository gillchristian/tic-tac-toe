import React from 'react'

import App from '../components/App'

const light = {
  name: 'light',
  main: 'tomato',
  secondary: 'palevioletred',
  bg: '#ffffef'
}

const dark = {
  name: 'dark',
  main: '#607D8B',
  secondary: '#795548',
  bg: '#bbb'
}

class AppContainer extends React.Component {
  state = {
    theme: light,
  }

  toggleTheme = () => {
    this.setState(s => ({
      theme: s.theme.name === 'light' ? dark : light,
    }))
  }

  render(){
    return <App toggleTheme={this.toggleTheme} theme={this.state.theme} />
  }
}

export default AppContainer
