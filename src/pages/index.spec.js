import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Home from "./index"

describe("Home", () => {
  it("matches snapshot", () => {
    const mathStub = jest.spyOn(global.Math, "random").mockImplementation(() => 0.5)
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
    mathStub.mockRestore()
  })

  it("renders a Layout", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find("Layout").length).toEqual(1)
  })

  it("has a h1 containing Harry Turnbull", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find("h1").text()).toEqual("Hi! I'm Harry Turnbull")
  })
})
