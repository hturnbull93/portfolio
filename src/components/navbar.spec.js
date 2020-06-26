import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Navbar from "./navbar"
import { Link } from "gatsby"

describe("Navbar", () => {
  it("renders Link to home/about", () => {
    const wrapper = shallow(<Navbar />)
    const link = <Link to="/">About</Link>
    expect(wrapper.containsMatchingElement(link)).toEqual(true)
  })

  it("renders Link to projects", () => {
    const wrapper = shallow(<Navbar />)
    const link = <Link to="/projects">Projects</Link>
    expect(wrapper.containsMatchingElement(link)).toEqual(true)
  })
})
