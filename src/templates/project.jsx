import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Project = ({ data }) => {
  return <Layout></Layout>
}

export default Project

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        deployLink
        repoLink
        tech
        title
        description
        img
        label
      }
    }
  }
`
