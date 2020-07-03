import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Project from "./project"

describe("Project", () => {
  it("renders a Layout", () => {
    const wrapper = shallowWithData()
    expect(wrapper.find("Layout").length).toEqual(1)
  })
})

const shallowWithData = () => {
  const data = {
    markdownRemark: {
      html: "<p>Test HTML content</p><p>Another paragraph</p>",
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
