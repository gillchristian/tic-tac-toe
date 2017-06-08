import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from './styled/Button'

const Wrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
`

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
