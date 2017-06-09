import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { X, O } from '../constants'
import { getO, getX } from '../reducers/score'

import Cell from './Cell'
import ScoreBoard from './styled/ScoreBoard'
import Score from './styled/Score'

const paperStack = `0 1px 1px rgba(0,0,0,0.15),
  0 10px 0 -5px #eee,
  0 10px 1px -4px rgba(0,0,0,0.15),
  0 20px 0 -10px #eee,
  0 20px 1px -9px rgba(0,0,0,0.15)`

const Wrapper = glamorous.div(
  {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: 64*3 + 5*2*3 + 20*2,
    padding: 20,
    borderRadius: 14,
    /* Paper stack box-shadow */
    /* @link: http://jsfiddle.net/chriscoyier/PBzLJ/ */
    background: '#eee',
    boxShadow: paperStack,
  },
  (props) => ({
    margin: props.isOver ? '0 20px 20px' : 20,
  }),
)

const Board = ({board, next, score, addMark, isOver}) => (
  <Wrapper isOver={isOver}>
    {
      board.map((mark, key) => (
        <Cell
          key={key}
          mark={mark}
          next={isOver ? '' : next}
          onClick={() => !mark && !isOver && addMark(next, key)}
        />
      ))
    }
    <ScoreBoard>
      <Score>
        <Cell mark={O} next={O} />
        {getO(score)}
      </Score>
      <Score>
        <Cell mark={X} next={X} />
        {getX(score)}
      </Score>
    </ScoreBoard>
  </Wrapper>
)

Board.propTypes = {
  isOver: PropTypes.bool,
  board: PropTypes.arrayOf(PropTypes.string).isRequired,
  next: PropTypes.oneOf([O, X]).isRequired,
  score: PropTypes.shape({
    [X]: PropTypes.number,
    [O]: PropTypes.number
  }).isRequired,
  addMark: PropTypes.func.isRequired
}

export default Board

