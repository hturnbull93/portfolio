import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Projects from "."

describe("Projects", () => {
  it("renders a Layout", () => {
    const wrapper = shallow(<Projects />)
    expect(wrapper.find("Layout").length).toEqual(1)
  })

  it("has a h1 containing Projects", () => {
    const wrapper = shallow(<Projects />)
    expect(wrapper.find("h1").text()).toEqual("Projects")
  })
})
