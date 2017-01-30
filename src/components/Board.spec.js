import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { X, O, s }  from '../constants'
import Board from './Board'
import Cell from './Cell'

describe('Board', () => {
  it('renders ok', () => {
    const props = {
      addMark: jest.fn(),
      next: X,
      isOver: false,
      board: [
        s, s, X,
        s, O, s,
        s, s, s
      ],
      score: {
        [X]: 0,
        [O]: 0
      }
    };

    const wrapper = shallow(<Board {...props} />);
    const cells = wrapper.find(Cell)

    expect(cells.length).toBe(11) // board: 9, score: 2
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('calls addMark onClick on the board Cells when the cell is empty & game is not over', () => {
    const props = {
      addMark: jest.fn(),
      next: X,
      isOver: false,
      board: [
        s, s, X,
        s, O, s,
        s, s, s
      ],
      score: {
        [X]: 0,
        [O]: 0
      }
    };

    const wrapper = shallow(<Board {...props} />);
    const cells = wrapper.find(Cell)

    cells.first().simulate('click')

    expect(props.addMark).toHaveBeenCalledWith(props.next, 0)
  })

  it('does not call addMark onClick on the board Cells when the cell is has a mark', () => {
    const props = {
      addMark: jest.fn(),
      next: O,
      isOver: false,
      board: [
        X, s, X,
        s, O, s,
        s, s, s
      ],
      score: {
        [X]: 0,
        [O]: 0
      }
    };

    const wrapper = shallow(<Board {...props} />);
    const cells = wrapper.find(Cell)

    cells.first().simulate('click')

    expect(props.addMark).not.toHaveBeenCalledWith()
  })

  it('does not call addMark onClick on the board Cells when the game is over', () => {
    const props = {
      addMark: jest.fn(),
      next: X,
      isOver: true,
      board: [
        s, s, O,
        s, O, X,
        O, s, X
      ],
      score: {
        [X]: 0,
        [O]: 0
      }
    };

    const wrapper = shallow(<Board {...props} />);
    const cells = wrapper.find(Cell)

    cells.first().simulate('click')

    expect(props.addMark).not.toHaveBeenCalledWith()
  })
})

