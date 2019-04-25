module.exports = {
  siteMetadata: {
    title: `Kyokushin`,
    description: `Kyokushin is a style of stand-up, full contact karate, founded in 1964 by Korean-
    Japanese Masutatsu Oyama.`,
    author: `Kush Infotech`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mas-oyama`,
        path: `${__dirname}/src/images/mas-oyama`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shokei-matsui`,
        path: `${__dirname}/src/images/shokei-matsui`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `prasenjit-saha`,
        path: `${__dirname}/src/images/prasenjit-saha`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `inset-images`,
        path: `${__dirname}/src/images/inset-images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home-carousel`,
        path: `${__dirname}/src/images/home-carousel`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logo`,
        path: `${__dirname}/src/images/logo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `banner-images`,
        path: `${__dirname}/src/images/banner-images`,
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
