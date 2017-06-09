import R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { isO, isX, isMark } from '../utils/game'
import { X, O } from '../constants'

const Span = glamorous.span({
  fontFamily: '"Gochi Hand", cursive',
  fontSize: '1.2em',
})

const Message = ({children}) => (
  <span>
    {isMark(children) && <Span>{children}</Span>}
    {
      R.cond([
        [isO, R.always(` wins!`)],
        [isX, R.always(` wins!`)],
        [R.T, R.always('Its a draw!')]
      ])(children)
    }
  </span>
)

Message.propTypes = {
  children: PropTypes.oneOf([X, O, ''])
}

export default Message

