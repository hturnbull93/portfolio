import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Contact from "./contact"

describe("Contact", () => {
  it("renders a Layout", () => {
    const wrapper = shallow(<Contact />)
    expect(wrapper.find("Layout").length).toEqual(1)
  })

  it("renders a link to my twitter", () => {
    const wrapper = shallow(<Contact />)
    const link = "a[href='https://twitter.com/hturnbull']"
    expect(wrapper.find(link).length).toEqual(1)
  })
})
