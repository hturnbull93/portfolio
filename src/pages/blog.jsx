import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BlogPost from "../components/blogPost"
import Watermark from "../components/watermark"

const Blog = ({ data }) => {
  const posts = data.allMediumFeed.edges.map(edge => (
    <BlogPost key={edge.node.id} details={edge.node} />
  ))

  return (
    <Layout>
      <Watermark>
        <h1>Blog.</h1>
      </Watermark>
      <section>{posts}</section>
    </Layout>
  )
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
