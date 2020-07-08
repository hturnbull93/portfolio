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
      <p>
        I write about what I'm learning in a blog on{" "}
        <a href="https://medium.com/@hturnbull93">Medium</a>.
      </p>
      <p>Here are some of my recent blog posts.</p>
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
