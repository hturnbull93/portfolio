import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SmartLink from "../components/smartLink"
import style from "./project.module.scss"
import SEO from "../components/seo"

const Project = ({ data }) => {
  const project = data.markdownRemark

  let repoLink, deployLink
  if (project.frontmatter.repoLink) {
    repoLink = (
      <SmartLink href={project.frontmatter.repoLink}>GitHub Repo</SmartLink>
    )
  }
  if (project.frontmatter.deployLink) {
    deployLink = (
      <SmartLink href={project.frontmatter.deployLink}>See it live</SmartLink>
    )
  }

  return (
    <Layout>
      <h1>{project.frontmatter.title}.</h1>
      <div className={style.labels}>
        <h3 className="tech">{project.frontmatter.tech}</h3>
        <h3 className="label">{project.frontmatter.label}</h3>
      </div>
      <div className={style.links}>
        {repoLink}
        {deployLink}
      </div>
      <section
        className="content"
        dangerouslySetInnerHTML={{ __html: project.html }}
      />
      <SEO
        title={project.frontmatter.title}
        description={project.frontmatter.description}
        twitterThumbnail={"projects/" + project.frontmatter.img}
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
