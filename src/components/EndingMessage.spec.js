import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { X, O, s } from '../constants'
import EndingMessage from './EndingMessage'

describe('EndingMessage', () => {
  it('renders ok', () => {
    const wrapper = shallow(<EndingMessage>{X}</EndingMessage>)

    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a different message for each mark & when empty', () => {
    let wrapper = shallow(<EndingMessage>{O}</EndingMessage>)

    expect(toJson(wrapper)).toMatchSnapshot()

    wrapper = shallow(<EndingMessage>{X}</EndingMessage>)

    expect(toJson(wrapper)).toMatchSnapshot()

    wrapper = shallow(<EndingMessage>{s}</EndingMessage>)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

