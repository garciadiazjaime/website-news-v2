import React from 'react'
import renderer from 'react-test-renderer'
// import placesSample from './placesSample.json'

import HomePage from '../../pages/index'

describe('index.js', () => {
  it('renders properly', () => {
    const props = {
      url: {
        pathname: ''
      },
      places: []
    };
    const component = renderer.create(<HomePage {...props} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
