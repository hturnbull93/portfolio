import React from "react"
import { shallow, render } from "enzyme"
import renderer from "react-test-renderer"
import * as Gatsby from "gatsby"
import * as ReachRouter from "@reach/router"
import Project from "./project"
import SmartLink from "../components/smartLink"

describe("Project", () => {
  it("renders a Layout", () => {
    const wrapper = shallowWithData()
    expect(wrapper.find("Layout").length).toEqual(1)
  })

  it("renders the html converted from md", () => {
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
    const mockedLocation = jest
      .spyOn(ReachRouter, "useLocation")
      .mockImplementation(() => ({
        pathname: "/mock-path",
      }))

    const wrapper = shallowWithData()
    const render = wrapper.render()
    expect(render.find(".content").html()).toEqual("<p>Test HTML content</p>")

    mockedQuery.mockRestore()
    mockedLocation.mockRestore()
  })

  it("renders a heading containing the title", () => {
    const wrapper = shallowWithData()
    expect(wrapper.find("h1").text()).toEqual("Test Title.")
  })

  it("renders a heading containing the tech", () => {
    const wrapper = shallowWithData()
    expect(wrapper.find(".tech").text()).toEqual("Example Tech")
  })

  it("renders a heading containing the label", () => {
    const wrapper = shallowWithData()
    expect(wrapper.find(".label").text()).toEqual("Test Label")
  })

  it("renders a SmartLink to the repoLink", () => {
    const wrapper = shallowWithData()
    const link = (
      <SmartLink href="https://github.com/hturnbull93/example">
        GitHub Repo
      </SmartLink>
    )
    expect(wrapper.containsMatchingElement(link)).toEqual(true)
  })

  it("renders a SmartLink to the deployLink", () => {
    const wrapper = shallowWithData()
    const link = <SmartLink href="https://example.com">See it live</SmartLink>
    expect(wrapper.containsMatchingElement(link)).toEqual(true)
  })

  it("renders okay with no links in props", () => {
    const data = {
      markdownRemark: {
        html: "<p>Test HTML content</p>",
        frontmatter: {
          tech: "Example Tech",
          title: "Test Title",
          description: "An example description",
          img: "example.png",
          label: "Test Label",
        },
      },
    }
    const wrapper = shallow(<Project data={data} />)

    expect(wrapper.find("SmartLink").length).toEqual(0)
  })

  it("renders an SEO", () => {
    const wrapper = shallowWithData()
    expect(wrapper.find("SEO").length).toEqual(1)
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
