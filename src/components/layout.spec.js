import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Layout from "./layout"
import Sidebar from "./sidebar"

describe('Layout', () => {
  it('renders a Sidebar component', () => {
    const wrapper = shallow(<Layout />)
    expect(wrapper.containsMatchingElement(<Sidebar />)).toEqual(true)
  });
});