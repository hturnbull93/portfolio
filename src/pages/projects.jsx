import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import ProjectCard from "../components/projectCard"
import style from "./projects.module.scss"
import SEO from "../components/seo"

const Projects = ({ data }) => {
  const cards = data.allMarkdownRemark.edges.map(edge => (
    <ProjectCard key={edge.node.id} details={edge.node} />
  ))
  return (
    <Layout>
      <h1>Projects.</h1>
      <section className={style.projectsGrid}>{cards}</section>
      <SEO
        title="Projects"
        description="A collection of projects, both commercial and personal."
      />
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
            label
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Projects
