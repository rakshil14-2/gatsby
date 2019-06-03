module.exports = {
  siteMetadata: {
    title: `Kush Infotech`,
    description: `Kush Infotech is a Kolkata based software company that provides software solutions at reasonable price`,
    author: `Kush Infotech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logo`,
        path: `${__dirname}/src/gallery/logo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `techLogo`,
        path: `${__dirname}/src/gallery/tech-logo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `carousel`,
        path: `${__dirname}/src/gallery/carousel`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery-images`,
        path: `${__dirname}/src/gallery/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `kyokushin`,
        path: `${__dirname}/src/gallery/projects/kyokushin`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `capital`,
        path: `${__dirname}/src/gallery/projects/capital`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `selfandbeyond`,
        path: `${__dirname}/src/gallery/projects/selfandbeyond`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `asset-tracking`,
        path: `${__dirname}/src/gallery/projects/asset-tracking`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `payroll`,
        path: `${__dirname}/src/gallery/projects/payroll`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `accounts`,
        path: `${__dirname}/src/gallery/projects/accounts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `eshop`,
        path: `${__dirname}/src/gallery/projects/eshop`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `medical`,
        path: `${__dirname}/src/gallery/projects/medical`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ornet`,
        path: `${__dirname}/src/gallery/projects/ornet`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
