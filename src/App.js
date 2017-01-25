import React, { PropTypes }  from 'react'

import './App.css'

import Cell from './components/Cell'
import Board from './components/styled/Board'
import Container from './components/styled/Container'

class App extends React.Component {
  static propTypes = {
    marks: PropTypes.arrayOf(
      PropTypes.oneOf(['●', '✖', ''])
    ).isRequired,
    next: PropTypes.oneOf(['●', '✖'])
  }

  listCells() {
    return this.props.marks
      .map((mark,key) => (
        <Cell key={key} mark={mark} next={this.props.next} />
      ))
  }

  render() {
    return (
      <Container>
        <Board>
          {this.listCells()}
        </Board>
      </Container>
    );
  }
}

export default App

