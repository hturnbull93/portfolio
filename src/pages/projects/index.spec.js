import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Projects from "."
import ProjectCard from "../../components/projectCard"

describe("Projects", () => {
  it("renders a Layout", () => {
    const wrapper = shallowWithData()
    expect(wrapper.find("Layout").length).toEqual(1)
  })

  it("has a h1 containing Projects", () => {
    const wrapper = shallowWithData()
    expect(wrapper.find("h1").text()).toEqual("Projects")
  })

  it("renders a ProjectCard for each project", () => {
    const wrapper = shallowWithData()
    const id = "1"
    const details = {
      title: "Test Title",
      repoLink: "https://github.com/hturnbull93/example",
      deployLink: "https://example-deploy-link.com",
      tech: "Test tech",
      img: "/test-image.png",
      description: "Test description",
      link: "/projects/example-project",
      label: "Personal",
    }
    const projectCard = <ProjectCard key={id} details={details} />

    expect(wrapper.containsMatchingElement(projectCard)).toEqual(true)
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
              repoLink: "https://github.com/hturnbull93/example",
              deployLink: "https://example-deploy-link.com",
              tech: "Test tech",
              img: "/test-image.png",
              description: "Test description",
              link: "/projects/example-project",
              label: "Personal",
            },
          },
        },
      ],
    },
  }

  return shallow(<Projects data={data} />)
}
