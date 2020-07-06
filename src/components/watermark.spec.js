import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Watermark from "./watermark"

describe("Watermark", () => {
  it("renders its children", () => {
    const child = <h1>Child</h1>
    const wrapper = shallow(<Watermark>{child}</Watermark>)
    expect(wrapper.find("h1").text()).toEqual("Child")
  })
})
