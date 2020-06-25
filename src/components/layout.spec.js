import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Layout from "./layout"
import Navbar from "./navbar"

describe('Layout', () => {
  it('renders a Navbar component', () => {
    const wrapper = shallow(<Layout />)
    expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true)
  });

  it('renders children', () => {
    const child = <h1>Child</h1>
    const wrapper = shallow(<Layout>{child}</Layout>)
    expect(wrapper.find("h1").text()).toEqual("Child")
  });
});