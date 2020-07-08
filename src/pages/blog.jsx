import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Blog = () => {
  return <Layout></Layout>
}

export default Blog

export const query = graphql`
  {
    allMediumFeed {
      edges {
        node {
          id
          link
          title
          date(formatString: "Do MMMM, YYYY")
        }
      }
    }
  }
`
