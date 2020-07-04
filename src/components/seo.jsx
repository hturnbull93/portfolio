import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = () => {
  const { site } = useStaticQuery(query)
  const { siteMetadata } = site

  return (
    <Helmet>
      <title>{siteMetadata.title}</title>
      <meta name="description" content={siteMetadata.description} />
    </Helmet>
  )
}
export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
