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

  it("renders a link to my LinkedIn", () => {
    const wrapper = shallow(<Contact />)
    const link = "a[href='https://www.linkedin.com/in/harry-turnbull/']"
    expect(wrapper.find(link).length).toEqual(1)
  })

  it("renders a link to my GitHub", () => {
    const wrapper = shallow(<Contact />)
    const link = "a[href='https://github.com/hturnbull93/']"
    expect(wrapper.find(link).length).toEqual(1)
  })

  it("renders a link to email me", () => {
    const wrapper = shallow(<Contact />)
    const link = "a[href='mailto:hturnbull@live.co.uk']"
    expect(wrapper.find(link).length).toEqual(1)
  })

  it("renders a ContactForm", () => {
    const wrapper = shallow(<Contact />)
    expect(wrapper.find("ContactForm").length).toEqual(1)
  })
})
