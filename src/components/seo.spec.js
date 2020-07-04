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
})

const mockQuery = () => {
  return jest.spyOn(Gatsby, "useStaticQuery").mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: "Mock title",
      },
    },
  }))
}