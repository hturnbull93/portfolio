import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import ProjectCard from "./projectCard"

const props = {
  title: "Test Title",
  repoLink: "https://github.com/hturnbull93/example",
  deployLink: "https://example-deploy-link.com",
  tech: "Test tech",
  img: "/test-image.png",
  description: "Test description",
}

describe("ProjectCard", () => {
  it("renders a h4 containing the prop title", () => {
    const wrapper = shallow(<ProjectCard details={props} />)
    expect(wrapper.find("h4").text()).toEqual("Test Title")
  })

  it("renders a h5 containing the prop tech", () => {
    const wrapper = shallow(<ProjectCard details={props} />)
    expect(wrapper.find("h5").text()).toEqual("Test tech")
  })

  it("renders a p containing the prop description", () => {
    const wrapper = shallow(<ProjectCard details={props} />)
    expect(wrapper.find("p").text()).toEqual("Test description")
  })
})
