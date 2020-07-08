module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-medium-feed`,
      options: {
        userName: `@hturnbull93`,
        name: `MediumFeed`, 
      },
    },
  ],
  siteMetadata: {
    title: "Harry Turnbull.",
    description: "Full Stack Developer based in London, UK.",
    url: "https://harryturnbull.com",
    twitterThumbnail: "twitter-thumbnail.png",
  },
}
