import React from "react"
import { mount } from "enzyme"
import renderer from "react-test-renderer"
import * as Gatsby from "gatsby"
import * as ReachRouter from "@reach/router"
import { Helmet } from "react-helmet"
import SEO from "./seo"

describe("SEO", () => {
  it("renders a title metatag", () => {
    const mockedQuery = mockQuery()
    const mockedLocation = mockLocation()
    const wrapper = mount(<SEO />)
    const helmet = Helmet.peek()
    expect(helmet.title).toEqual("Mock title")
    mockedQuery.mockRestore()
    mockedLocation.mockRestore()
  })

  it("title prop overwrites title metatag", () => {
    const mockedQuery = mockQuery()
    const mockedLocation = mockLocation()
    const wrapper = mount(<SEO title="Overwrite title" />)
    const helmet = Helmet.peek()
    expect(helmet.title).toEqual("Overwrite title / Mock title")
    mockedQuery.mockRestore()
    mockedLocation.mockRestore()
  })

  it("renders a description metatag", () => {
    const mockedQuery = mockQuery()
    const mockedLocation = mockLocation()
    const wrapper = mount(<SEO />)
    const metaTags = Helmet.peek().metaTags
    const expected = {
      name: "description",
      content: "Mock description",
    }
    expect(metaTags).toContainEqual(expected)
    mockedQuery.mockRestore()
    mockedLocation.mockRestore()
  })

  it("description prop overwrites description metatag", () => {
    const mockedQuery = mockQuery()
    const mockedLocation = mockLocation()
    const wrapper = mount(<SEO description="Overwrite description" />)
    const metaTags = Helmet.peek().metaTags
    const expected = {
      name: "description",
      content: "Overwrite description",
    }
    expect(metaTags).toContainEqual(expected)
    mockedQuery.mockRestore()
    mockedLocation.mockRestore()
  })

  describe("Twitter metatags", () => {
    it("renders a twitter:card metatag", () => {
      const mockedQuery = mockQuery()
      const mockedLocation = mockLocation()
      const wrapper = mount(<SEO />)
      const metaTags = Helmet.peek().metaTags
      const expected = {
        name: "twitter:card",
        content: "summary",
      }
      expect(metaTags).toContainEqual(expected)
      mockedQuery.mockRestore()
      mockedLocation.mockRestore()
    })

    it("renders a twitter:title metatag", () => {
      const mockedQuery = mockQuery()
      const mockedLocation = mockLocation()
      const wrapper = mount(<SEO />)
      const metaTags = Helmet.peek().metaTags
      const expected = {
        name: "twitter:title",
        content: "Mock title",
      }
      expect(metaTags).toContainEqual(expected)
      mockedQuery.mockRestore()
      mockedLocation.mockRestore()
    })

    it("title prop overwrites twitter:title metatag", () => {
      const mockedQuery = mockQuery()
      const mockedLocation = mockLocation()
      const wrapper = mount(<SEO title="Overwrite title" />)
      const metaTags = Helmet.peek().metaTags
      const expected = {
        name: "twitter:title",
        content: "Overwrite title / Mock title",
      }
      expect(metaTags).toContainEqual(expected)
      mockedQuery.mockRestore()
      mockedLocation.mockRestore()
    })

    it("renders a twitter:description metatag", () => {
      const mockedQuery = mockQuery()
      const mockedLocation = mockLocation()
      const wrapper = mount(<SEO />)
      const metaTags = Helmet.peek().metaTags
      const expected = {
        name: "twitter:description",
        content: "Mock description",
      }
      expect(metaTags).toContainEqual(expected)
      mockedQuery.mockRestore()
      mockedLocation.mockRestore()
    })

    it("description prop overwrites twitter:description metatag", () => {
      const mockedQuery = mockQuery()
      const mockedLocation = mockLocation()
      const wrapper = mount(<SEO description="Overwrite description" />)
      const metaTags = Helmet.peek().metaTags
      const expected = {
        name: "twitter:description",
        content: "Overwrite description",
      }
      expect(metaTags).toContainEqual(expected)
      mockedQuery.mockRestore()
      mockedLocation.mockRestore()
    })

    it("renders a twitter:image metatag", () => {
      const mockedQuery = mockQuery()
      const mockedLocation = mockLocation()
      const wrapper = mount(<SEO />)
      const metaTags = Helmet.peek().metaTags
      const expected = {
        name: "twitter:image",
        content: "https://mocksite.com/twitter-thumbnail.png",
      }
      expect(metaTags).toContainEqual(expected)
      mockedQuery.mockRestore()
      mockedLocation.mockRestore()
    })

    it("twitterThumbnail prop overwrites twitter:image metatag", () => {
      const mockedQuery = mockQuery()
      const mockedLocation = mockLocation()
      const wrapper = mount(
        <SEO twitterThumbnail="overwritten-thumbnail.png" />
      )
      const metaTags = Helmet.peek().metaTags
      const expected = {
        name: "twitter:image",
        content: "https://mocksite.com/overwritten-thumbnail.png",
      }
      expect(metaTags).toContainEqual(expected)
      mockedQuery.mockRestore()
      mockedLocation.mockRestore()
    })
  })
  describe("Facebook metatags", () => {
    it("renders a og:title metatag", () => {
      const mockedQuery = mockQuery()
      const mockedLocation = mockLocation()
      const wrapper = mount(<SEO />)
      const metaTags = Helmet.peek().metaTags
      const expected = {
        property: "og:title",
        content: "Mock title",
      }
      expect(metaTags).toContainEqual(expected)
      mockedQuery.mockRestore()
      mockedLocation.mockRestore()
    })

    it("title prop overwrites og:title metatag", () => {
      const mockedQuery = mockQuery()
      const mockedLocation = mockLocation()
      const wrapper = mount(<SEO title="Overwrite title" />)
      const metaTags = Helmet.peek().metaTags
      const expected = {
        property: "og:title",
        content: "Overwrite title / Mock title",
      }
      expect(metaTags).toContainEqual(expected)
      mockedQuery.mockRestore()
      mockedLocation.mockRestore()
    })

    it("renders an og:description metatag", () => {
      const mockedQuery = mockQuery()
      const mockedLocation = mockLocation()
      const wrapper = mount(<SEO />)
      const metaTags = Helmet.peek().metaTags
      const expected = {
        name: "og:description",
        content: "Mock description",
      }
      expect(metaTags).toContainEqual(expected)
      mockedQuery.mockRestore()
      mockedLocation.mockRestore()
    })

    it("description prop overwrites og:description metatag", () => {
      const mockedQuery = mockQuery()
      const mockedLocation = mockLocation()
      const wrapper = mount(<SEO description="Overwrite description" />)
      const metaTags = Helmet.peek().metaTags
      const expected = {
        property: "og:description",
        content: "Overwrite description",
      }
      expect(metaTags).toContainEqual(expected)
      mockedQuery.mockRestore()
      mockedLocation.mockRestore()
    })
  })
})

const mockQuery = () => {
  return jest.spyOn(Gatsby, "useStaticQuery").mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: "Mock title",
        description: "Mock description",
        url: "https://mocksite.com",
        twitterThumbnail: "twitter-thumbnail.png",
      },
    },
  }))
}

const mockLocation = () => {
  return jest.spyOn(ReachRouter, "useLocation").mockImplementation(() => ({
    pathname: "/mock-path",
  }))
}
