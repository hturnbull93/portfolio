import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Home from "./index"

describe("Home", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders a Layout", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find("Layout").length).toEqual(1)
  })

  it("has a h1 containing Harry Turnbull", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find("h1").text()).toEqual("Harry Turnbull.")
  })
})
