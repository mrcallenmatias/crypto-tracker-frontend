import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'
Enzyme.configure({ adapter: new Adapter() })

describe("When header renders", () => {
  let renderedHeader
  beforeEach(() => {
    renderedHeader = shallow(<Header />)
  })
  it("display header page", () => {
    const renderedText = renderedHeader.find("img")
    expect(renderedText.length).toEqual(1)
  })
})
