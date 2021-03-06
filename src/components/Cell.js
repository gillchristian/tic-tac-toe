import R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { X, O } from '../constants'

const getCellColor = (p) => R.cond([
  [R.equals(X), R.always(p.theme.secondary)],
  [R.equals(O), R.always(p.theme.main)],
  [R.T,         R.always('papayawhip')],
])(p.mark)

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${getCellColor};
  width: 64px;
  height: 64px;
  border-radius: 14px;
  cursor: pointer;
  margin: 5px;
  font-weight: bold;
  font-size: 40px;
  font-family: 'Gochi Hand', cursive;
  color: white;
  box-shadow: 0 2px 5px gray;
  user-select: none;

  &:hover {
    background-color: ${props => !props.mark && 'lightgray'};
    cursor: ${props => !props.next && 'default'};
`

class Cell extends React.Component {
  static propTypes = {
    mark: PropTypes.oneOf([O, X, '']),
    next: PropTypes.oneOf([O, X, ''])
  }

  state = {
    mouseIsOver: false
  }

  mouseEnter = () => {
    this.setState({ mouseIsOver: true })
  }

  mouseLeave = () => {
    this.setState({ mouseIsOver: false })
  }

  render() {
    const {mark, next} = this.props

    return (
      <Wrapper
        mark={mark}
        next={next}
        onClick={this.props.onClick}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {
          mark
            ? mark
            : (this.state.mouseIsOver ? next : '')
        }
      </Wrapper>
    )
  }
}

export default Cell

