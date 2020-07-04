import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import * as Gatsby from "gatsby"
import Home from "./index"

describe("Home", () => {
  it("matches snapshot", () => {
    const mockedQuery = jest
      .spyOn(Gatsby, "useStaticQuery")
      .mockImplementation(() => ({
        site: {
          siteMetadata: {
            title: "Mock title",
            description: "Mock description",
            url: "https://mocksite.com",
            twitterThumbnail: "twitter-thumbnail.png",
          },
        },
      }))
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
    mockedQuery.mockRestore()
  })

  it("renders a Layout", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find("Layout").length).toEqual(1)
  })

  it("has a h1 containing Harry Turnbull", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find("h1").text()).toEqual("Harry Turnbull.")
  })

  it("renders an SEO", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find("SEO").length).toEqual(1)
  })
})
