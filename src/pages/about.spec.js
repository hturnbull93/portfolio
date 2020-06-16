import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import About from "./about"

describe("About", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<About />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("has a h1 containing About", () => {
    const wrapper = shallow(<About />)
    expect(wrapper.find("h1").text()).toEqual("About")
  })
})
