import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Sidebar from "./sidebar"

describe("Sidebar", () => {
  it("renders a link to my cv", () => {
    const wrapper = shallow(<Sidebar />)
    const link = "a[href='https://github.com/hturnbull93/cv']"
    expect(wrapper.find(link).length).toEqual(1)
  })
})
