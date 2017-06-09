import R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { X, O } from '../constants'

const getCellColor = (p, t) => R.cond([
  [R.equals(X), R.always(t.secondary)],
  [R.equals(O), R.always(t.main)],
  [R.T,         R.always('papayawhip')],
])(p.mark)

const Wrapper = glamorous.div(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    borderRadius: 14,
    cursor: 'pointer',
    margin: 5,
    fontWeight: 'bold',
    fontSize: 40,
    fontFamily: '"Gochi Hand", cursive',
    color: 'white',
    boxShadow: '0 2px 5px gray',
    userSelect: 'none',
  },
  (props, theme) =>  ({
    backgroundColor: getCellColor(props, theme),
    ':hover': {
      backgroundColor: !props.mark && 'lightgray',
      cursor: !props.next && 'default',
    }
  }),
)

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

