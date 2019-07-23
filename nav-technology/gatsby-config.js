module.exports = {
  // siteMetadata: {
  //   title: `Nav Technology`,
  //   description: `Nav Technology is a Sony authorized service center in Kolkata that provides state of art Sony services at reasonable price`,
  //   author: `Kush Infotech`,
  //   siteUrl:'https://navtechnology.in'
  // },
  siteMetadata: {
    title: 'Nav Technology Pvt Ltd, Sony Service Center',
    description: `
      Nav Technology is Sony authorized service center in Bagmari, Kankurgachi, North Kolkata which provides specialized repairs and services for Sony products.
    `,
    url: 'https://navtechnology.in',
    image: 'https://navtechnology.in/11.jpg',
    author: {
      name: 'Sushant Agrawal',
      minibio: `Sushant is software consultant in state of the art software technologies like React.js, Angular.js, Node.js, PostgreSql and many more.`,
    },
    organization: {
      name: 'Nav technology Pvt Ltd',
      url: 'https://navtechnology.in',
      logo: 'https://navtechnology.in/logo.png',
    },
    social: {
      twitter: '@nav_technology',
      fbAppID: 'https://www.facebook.com/Nav-Technology-Pvt-Ltd-2856558957704521',
    },
    categories: [
      {
        slug: 'Service',
        name: 'Sony Service Center',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
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
        name: `carousel`,
        path: `${__dirname}/src/gallery/carousel`,
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
        name: `category`,
        path: `${__dirname}/src/gallery/category`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `album`,
        path: `${__dirname}/src/gallery/album`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contact`,
        path: `${__dirname}/src/gallery/contact`,
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
