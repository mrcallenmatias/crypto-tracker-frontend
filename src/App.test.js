// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import App from './App'
import NotFound from './pages/NotFound'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })


describe("When App renders", () => {
  let renderedApp
  beforeEach(() => {
    renderedApp = shallow(<App />)
  })

  it("displays a header and footer", () => {

    const appHeading = renderedApp.find("Header")
    expect(appHeading.length).toEqual(1)

    const appFooter = renderedApp.find("Footer")
    expect(appFooter.length).toEqual(1)
  })
})
