import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, twitterThumbnail }) => {
  const location = useLocation()

  const { site } = useStaticQuery(query)
  const { siteMetadata } = site

  const seo = {
    title: title ? `${title} / ${siteMetadata.title}` : siteMetadata.title,
    description: description || siteMetadata.description,
    twitterThumbnail: `${siteMetadata.url}/${
      twitterThumbnail ? twitterThumbnail : siteMetadata.twitterThumbnail
    }`,
    url: `${siteMetadata.url}${location.pathname}`
  }

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.twitterThumbnail} />

      {/* Facebook */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.twitterThumbnail} />
      <meta property="og:url" content={seo.url} />
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
        url
        twitterThumbnail
      }
    }
  }
`
