import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import BlogPost from "./blogPost"

describe("BlogPost", () => {
  it("renders the title ", () => {
    const wrapper = shallowWithData()
    expect(wrapper.text()).toContain("Blog abc")
  })
})

const shallowWithData = () => {
  const details = {
    id: "abc",
    link: "https://example.com/abc",
    title: "Blog abc",
    date: "7th July, 2020",
  }

  return shallow(<BlogPost details={details} />)
}
