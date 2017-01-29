import React, { PropTypes }  from 'react'

import './App.css'

import { X, O } from './constants'

import Cell from './components/Cell'
import ScoreBoard from './components/ScoreBoard'
import Score from './components/Score'
import Board from './components/Board'
import AppStyleWrapper from './components/styled/AppStyleWrapper'

class App extends React.Component {
  static propTypes = {
    marks: PropTypes.arrayOf(
      PropTypes.oneOf([O, X, ''])
    ).isRequired,
    next: PropTypes.oneOf([O, X])
  }

  listCells() {
    return this.props.marks
      .map((mark,key) => (
        <Cell key={key} mark={mark} next={this.props.next} />
      ))
  }

  render() {
    return (
      <AppStyleWrapper>
        <Board>
          {this.listCells()}
          <ScoreBoard>
            <Score>
              <Cell mark={O} next={O} />
              {7}
            </Score>
            <Score>
              <Cell mark={X} next={X} />
              {5}
            </Score>
          </ScoreBoard>
        </Board>
      </AppStyleWrapper>
    );
  }
}

export default App

