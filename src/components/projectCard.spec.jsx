import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import ProjectCard from "./projectCard"

const props = {
  title: "Test Title",
  repoLink: "https://github.com/hturnbull93/instagram-challenge",
  deployLink: "https://neo-gram.herokuapp.com",
  tech: "Ruby on Rails",
  img: "/icon.png",
  description: "A social media web app, inspired by Instagram and Neomorphism",
}

describe("ProjectCard", () => {
  it("renders a h4 containing the prop title", () => {
    const wrapper = shallow(<ProjectCard details={props} />)
    expect(wrapper.find("h4").text()).toEqual("Test Title")
  })
})