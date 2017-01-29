import { incrementScore } from './score'

import { X, O } from '../constants'

describe('incrementScore', function () {
  it('creates an action with the provided mark as payload', () => {
    let actual = incrementScore(O)
    expect(actual).toMatchSnapshot()

    actual = incrementScore(X)
    expect(actual).toMatchSnapshot()

    actual = incrementScore('✓')
    expect(actual).toMatchSnapshot()
  })
})

