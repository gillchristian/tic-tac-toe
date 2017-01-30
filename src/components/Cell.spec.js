import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Cell from './Cell'

import { X, O, s } from '../constants'

describe('Cell', () => {
  it('renders ok', () => {
    const wrapper = shallow(<Cell next={X} mark={O} />)

    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('changes state when mouse enters and leaves', () => {
    const wrapper = shallow(<Cell next={X} mark={O} />)

    expect(wrapper.state()).toEqual({ mouseIsOver: false })

    wrapper.simulate('mouseenter')

    expect(wrapper.state()).toEqual({ mouseIsOver: true })

    wrapper.simulate('mouseleave')

    expect(wrapper.state()).toEqual({ mouseIsOver: false })
  })

  it('renders the mark if present, or the next mark on hover if present', () => {
    const wrapper = shallow(<Cell next={X} mark={O} />)

    expect(wrapper.children().text()).toEqual(O)

    wrapper.simulate('mouseenter')

    // props.mark is present, still displayes the mark
    expect(wrapper.children().text()).toEqual(O)

    wrapper.setProps({ next: X, mark: s })

    // mouse still over, no mark so displayes next mark
    expect(wrapper.children().text()).toEqual(X)

    wrapper.simulate('mouseleave')

    // mouse not over, no mark, displayes no mark
    expect(toJson(wrapper)).toMatchSnapshot()

    wrapper.setProps({ next: s, mark: s })
    wrapper.simulate('mouseenter')

    // mouse over, no mark, no next mark, displayes no mark
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

