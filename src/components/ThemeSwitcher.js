import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import Button from './styled/Button'

const Wrapper = glamorous.div({
  position: 'fixed',
  top: 10,
  right: 10,
})

const ThemeSwitcher = ({ switchTheme, current = 'light' }) => (
  <Wrapper>
    <Button onClick={switchTheme}>{current[0].toUpperCase()} 💄</Button>
  </Wrapper>
);

ThemeSwitcher.propTypes = {
  switchTheme: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
}

export default ThemeSwitcher
