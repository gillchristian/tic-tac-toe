import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import { X, O } from '../constants'
import { NotificationsContainer } from './Notifications'
import Notifications from '../components/Notifications'

describe('Notifications container', () => {
  it('Renders the Notifications component when the game is over, or null if not over', () => {
    const props = {
      startGame: () => {},
      isOver: true,
      winner: X
    }
    let wrapper = shallow(<NotificationsContainer {...props} />)

    expect(toJson(wrapper)).toMatchSnapshot()

    expect(wrapper.type()).toEqual(Notifications)

    props.isOver = false

    wrapper = shallow(<NotificationsContainer {...props} />)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

