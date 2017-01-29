import R from 'ramda'
import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { isO, isX, isMark } from '../utils/game'
import { X, O } from '../constants'

const Span = styled.span`
  font-family: 'Gochi Hand', cursive;
  font-size: 1.2em;
`

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

