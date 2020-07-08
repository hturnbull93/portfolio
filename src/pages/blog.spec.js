import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"
import Blog from "./blog"
import BlogPost from "../components/blogPost"

describe("Blog", () => {
  it("renders a Layout", () => {
    const wrapper = shallowWithData()
    expect(wrapper.find("Layout").length).toEqual(1)
  })

  it("renders a BlogPost for each post", () => {
    const wrapper = shallowWithData()
    const postOne = (
      <BlogPost
        details={{
          id: "abc",
          link: "https://example.com/abc",
          title: "Blog abc",
          date: "7th July, 2020",
        }}
      />
    )
    const postTwo = (
      <BlogPost
        details={{
          id: "123",
          link: "https://example.com/abc",
          title: "Blog 123",
          date: "18th June, 2020",
        }}
      />
    )
    expect(wrapper.containsMatchingElement(postOne)).toEqual(true)
    expect(wrapper.containsMatchingElement(postTwo)).toEqual(true)
  })
})

const shallowWithData = () => {
  const data = {
    allMediumFeed: {
      edges: [
        {
          node: {
            id: "abc",
            link: "https://example.com/abc",
            title: "Blog abc",
            date: "7th July, 2020",
          },
        },
        {
          node: {
            id: "123",
            link: "https://example.com/abc",
            title: "Blog 123",
            date: "18th June, 2020",
          },
        },
      ],
    },
  }

  return shallow(<Blog data={data} />)
}
