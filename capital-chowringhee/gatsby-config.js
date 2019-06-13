module.exports = {
  siteMetadata: {
    title: `Capital Chowringhee`,
    description: `Retail shop for sales and service of electronic items. We specialize in digital cameras, SLR and mtrrorless cameras, camera lens and assessories, cellular / mobile phones, mobile phone accessory, power bank, charger, watch, headphone, microphone, earphone, laptop and desktop computer and assessory, domestic items and many more`,
    author: `Kush Infotech`,
    siteUrl:'https://quirky-bell-4d85c0.netlify.com/'
  },

  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/mark-down`,
        name: "mark-down",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal:false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `offers`,
        path: `${__dirname}/src/gallaries/offers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shop`,
        path: `${__dirname}/src/gallaries/shop`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `showcase`,
        path: `${__dirname}/src/gallaries/showcase`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `brands`,
        path: `${__dirname}/src/gallaries/brands`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contacts`,
        path: `${__dirname}/src/gallaries/contacts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logo`,
        path: `${__dirname}/src/gallaries/logo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/gallaries/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `workshop`,
        path: `${__dirname}/src/gallaries/workshop`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `spareParts`,
        path: `${__dirname}/src/gallaries/spare-parts`,
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
