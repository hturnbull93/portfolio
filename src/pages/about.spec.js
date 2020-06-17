import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import About from "./about"

describe("About", () => {
  it("matches snapshot", () => {
    const mathStub = jest.spyOn(global.Math, "random").mockImplementation(() => 0.5)
    const tree = renderer.create(<About />).toJSON()
    expect(tree).toMatchSnapshot()
    mathStub.mockRestore()
  })

  it("renders a Layout", () => {
    const wrapper = shallow(<About />)
    expect(wrapper.find("Layout").length).toEqual(1)
  })

  it("has a h1 containing About", () => {
    const wrapper = shallow(<About />)
    expect(wrapper.find("h1").text()).toEqual("About")
  })
})
