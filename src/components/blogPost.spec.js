import React from "react"
import { mount } from "enzyme"
import renderer from "react-test-renderer"
import BlogPost from "./blogPost"

describe("BlogPost", () => {
  it("renders the title", () => {
    const wrapper = mountWithData()
    expect(wrapper.text()).toContain("Blog abc")
  })

  it("renders the date", () => {
    const wrapper = mountWithData()
    expect(wrapper.text()).toContain("7th July, 2020")
  })

  it("renders a SmartLink", () => {
    const wrapper = mountWithData()
    const link = wrapper.find('SmartLink')
    expect(link.props().href).toEqual("https://example.com/abc")
  })
})

const mountWithData = () => {
  const details = {
    id: "abc",
    link: "https://example.com/abc",
    title: "Blog abc",
    date: "7th July, 2020",
  }

  return mount(<BlogPost details={details} />)
}
