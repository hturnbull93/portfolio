import React from "react"
import { mount } from "enzyme"
import renderer from "react-test-renderer"
import * as Gatsby from "gatsby"
import { Helmet } from "react-helmet"
import SEO from "./seo"

describe("SEO", () => {
  it("renders a title metatag", () => {
    const mock = mockQuery()
    const wrapper = mount(<SEO />)
    const helmet = Helmet.peek()
    expect(helmet.title).toEqual("Mock title")
    mock.mockRestore()
  })

  it("title prop overwrites title metatag", () => {
    const mock = mockQuery()
    const wrapper = mount(<SEO title="Overwrite title" />)
    const helmet = Helmet.peek()
    expect(helmet.title).toEqual("Overwrite title / Mock title")
    mock.mockRestore()
  })

  it("renders a description metatag", () => {
    const mock = mockQuery()
    const wrapper = mount(<SEO />)
    const metaTags = Helmet.peek().metaTags
    const expected = {
      name: "description",
      content: "Mock description",
    }
    expect(metaTags).toContainEqual(expected)
    mock.mockRestore()
  })

  it("description prop overwrites description metatag", () => {
    const mock = mockQuery()
    const wrapper = mount(<SEO description="Overwrite description" />)
    const metaTags = Helmet.peek().metaTags
    const expected = {
      name: "description",
      content: "Overwrite description",
    }
    expect(metaTags).toContainEqual(expected)
    mock.mockRestore()
  })
})

const mockQuery = () => {
  return jest.spyOn(Gatsby, "useStaticQuery").mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: "Mock title",
        description: "Mock description",
      },
    },
  }))
}
