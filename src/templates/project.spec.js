import React from "react"
import { shallow, render } from "enzyme"
import renderer from "react-test-renderer"
import Project from "./project"

describe("Project", () => {
  it("renders a Layout", () => {
    const wrapper = shallowWithData()
    expect(wrapper.find("Layout").length).toEqual(1)
  })

  it("renders the html converted from md", () => {
    const wrapper = shallowWithData()
    const render = wrapper.render()
    expect(render.find(".content").html()).toEqual("<p>Test HTML content</p>")
  })

  it("renders a heading containing the title", () => {
    const wrapper = shallowWithData()
    expect(wrapper.find("h1").text()).toEqual("Test Title.")
  })
})

const shallowWithData = () => {
  const data = {
    markdownRemark: {
      html: "<p>Test HTML content</p>",
      frontmatter: {
        deployLink: "https://example.com",
        repoLink: "https://github.com/hturnbull93/example",
        tech: "Example Tech",
        title: "Test Title",
        description: "An example description",
        img: "example.png",
        label: "Test Label",
      },
    },
  }
  return shallow(<Project data={data} />)
}
