import { _addMark } from './game'

import { X, O } from '../constants'

describe('addMark', function () {
  it('creates an action with the provided mark as payoad', () => {
    let actual = _addMark(O, 1)
    expect(actual).toMatchSnapshot()

    actual = _addMark(X, 0)
    expect(actual).toMatchSnapshot()

    actual = _addMark('✓', 5)
    expect(actual).toMatchSnapshot()
  })
})


