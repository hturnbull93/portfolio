import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Project = ({ data }) => {
  const project = data.markdownRemark
  return (
    <Layout>
      <h1>{project.frontmatter.title}.</h1>
      <section
        className="content"
        dangerouslySetInnerHTML={{ __html: project.html }}
      />
    </Layout>
  )
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
