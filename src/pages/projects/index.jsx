import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import ProjectCard from "../../components/projectCard"

const Projects = ({ data }) => {
  const cards = data.allMarkdownRemark.edges.map(edge => (
    <ProjectCard key={edge.node.id} details={edge.node.frontmatter} />
  ))
  return (
    <Layout>
      <h1>Projects</h1>
      {cards}
    </Layout>
  )
}

export const query = graphql`
  query projects {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            deployLink
            repoLink
            tech
            title
            description
            img
            link
            label
          }
        }
      }
    }
  }
`

export default Projects
