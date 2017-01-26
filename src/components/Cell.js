import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { X, O } from '../constants'

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
  color: white;
  box-shadow: 0 2px 5px gray;

  &:hover {
    background-color: ${props => !props.mark && 'lightgray'};
    cursor: ${props => !!props.mark && 'default'};
`

class Cell extends React.Component {
  static propTypes = {
    mark: PropTypes.oneOf([O, X, '']),
    next: PropTypes.oneOf([O, X])
  }

  state = {
    mouseIsOver: false
  }

  mouseEnter = () => {
    this.setState({
      mouseIsOver: true
    })
  }

  mouseLeave = () => {
    this.setState({
      mouseIsOver: false
    })
  }

  render() {
    const {mark, next} = this.props

    return (
      <Wrapper
        mark={mark}
        next={next}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {
          mark
            ? mark
            : this.state.mouseIsOver
              ? next
              : ''
        }
      </Wrapper>
    )
  }
}

export default Cell

function getCellColor(props) {
  switch (props.mark) {
    case X:
      return 'palevioletred'
    case O:
      return 'tomato'
    default:
      return 'papayawhip'
  }
}

