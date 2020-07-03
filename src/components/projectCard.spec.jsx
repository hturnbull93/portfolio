import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import ProjectCard from "./projectCard"
import SmartLink from "./smartLink"

const props = {
  id: "1",
  frontmatter: {
    title: "Test Title",
    repoLink: "https://github.com/hturnbull93/example",
    deployLink: "https://example.com",
    tech: "Test tech",
    img: "image.png",
    description: "Test description",
    label: "Personal",
  },
  fields: {
    slug: "/projects/example-project/",
  },
}

describe("ProjectCard", () => {
  it("renders a heading containing the prop title", () => {
    const wrapper = shallow(<ProjectCard details={props} />)
    expect(wrapper.find("h3").text()).toEqual("Test Title.")
  })

  it("renders a heading containing the prop tech", () => {
    const wrapper = shallow(<ProjectCard details={props} />)
    expect(wrapper.find(".tech").text()).toEqual("Test tech")
  })

  it("renders a heading containing the prop label", () => {
    const wrapper = shallow(<ProjectCard details={props} />)
    expect(wrapper.find(".label").text()).toEqual("Personal")
  })

  it("renders a p containing the prop description", () => {
    const wrapper = shallow(<ProjectCard details={props} />)
    expect(wrapper.find("p").text()).toEqual("Test description")
  })

  it("renders a SmartLink to the prop repoLink", () => {
    const wrapper = shallow(<ProjectCard details={props} />)
    const link = (
      <SmartLink href="https://github.com/hturnbull93/example">
        GitHub Repo
      </SmartLink>
    )
    expect(wrapper.containsMatchingElement(link)).toEqual(true)
  })

  it("renders a SmartLink to the prop deployLink", () => {
    const wrapper = shallow(<ProjectCard details={props} />)
    const link = <SmartLink href="https://example.com">See it live</SmartLink>
    expect(wrapper.containsMatchingElement(link)).toEqual(true)
  })

  it("renders an img with src of the prop img in the projects dir", () => {
    const wrapper = shallow(<ProjectCard details={props} />)
    const img = "img[src='/projects/image.png']"
    expect(wrapper.find(img).length).toEqual(1)
  })

  it("renders okay with no links in props", () => {
    const noLinkProps = {
      id: "1",
      frontmatter: {
        title: "Test Title",
        tech: "Test tech",
        img: "image.png",
        description: "Test description",
        label: "Personal",
      },
      fields: {
        slug: "/projects/example-project/",
      },
    }
    const wrapper = shallow(<ProjectCard details={noLinkProps} />)

    expect(wrapper.find(".title").text()).toEqual("Test Title.")
    expect(wrapper.find(".tech").text()).toEqual("Test tech")
    expect(wrapper.find(".label").text()).toEqual("Personal")
    expect(wrapper.find("p").text()).toEqual("Test description")
    expect(wrapper.find("img[src='/projects/image.png']").length).toEqual(1)
  })

  it("renders a SmartLink to the page of the project", () => {
    const wrapper = shallow(<ProjectCard details={props} />)
    const link = <SmartLink to="/projects/example-project/">Read more</SmartLink>
    expect(wrapper.containsMatchingElement(link)).toEqual(true)
  })
})
