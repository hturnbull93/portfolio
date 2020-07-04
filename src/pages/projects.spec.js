import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Projects from "./projects"
import ProjectCard from "../components/projectCard"

describe("Projects", () => {
  it("renders a Layout", () => {
    const wrapper = shallowWithData()
    expect(wrapper.find("Layout").length).toEqual(1)
  })

  it("has a h1 containing Projects", () => {
    const wrapper = shallowWithData()
    expect(wrapper.find("h1").text()).toEqual("Projects.")
  })

  it("renders a ProjectCard for each project", () => {
    const wrapper = shallowWithData()
    const id = "1"
    const node = {
      id: "1",
      frontmatter: {
        title: "Test Title",
      },
      fields: {
        slug: "/projects/bank/",
      },
    }
    const projectCard = <ProjectCard key={id} details={node} />

    expect(wrapper.containsMatchingElement(projectCard)).toEqual(true)
  })

  it("renders an SEO", () => {
    const wrapper = shallowWithData()
    expect(wrapper.find("SEO").length).toEqual(1)
  })
})

const shallowWithData = () => {
  const data = {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            id: "1",
            frontmatter: {
              title: "Test Title",
            },
            fields: {
              slug: "/projects/bank/",
            },
          },
        },
      ],
    },
  }

  return shallow(<Projects data={data} />)
}
