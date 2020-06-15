import React from "react"
import { shallow } from "enzyme"
import Home from "."

describe("Home", () => {
  it("has a h1 containing Harry Turnbull", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find("h1").text()).toEqual("Harry Turnbull")
  })
})
