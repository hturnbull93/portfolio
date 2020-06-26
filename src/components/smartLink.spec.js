import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import SmartLink from "./smartLink"
import { Link } from "gatsby"

describe("SmartLink", () => {
  it("renders Link when passed a to prop", () => {
    const wrapper = shallow(<SmartLink to="/">About</SmartLink>)
    const link = <Link to="/">About</Link>
    expect(wrapper.containsMatchingElement(link)).toEqual(true)
  })
})
