module.exports = {
  siteMetadata: {
    title: `Nav Technology Pvt Ltd, Sony Service Center`,
    description: `
      Nav Technology is Sony authorized service center in Bagmari, Kankurgachi, North Kolkata which provides specialized repairs and services for Sony products.
    `,
    url: 'https://navtechnology.in',
    siteUrl: 'https://www.navtechnology.in',
    image: 'https://www.navtechnology.in/11.jpg',
    author: {
      name: 'Sushant Agrawal',
      minibio: 'Sushant is software consultant in state of the art software technologies like React.js, Angular.js, Node.js, PostgreSql and many more.'
    },
    organization: {
      name: 'Nav technology Pvt Ltd',
      url: 'https://www.navtechnology.in',
      logo: 'https://www.navtechnology.in/logo.png'
    },
    social: {
      twitter: '@nav_technology',
      fbAppID: 'https://www.facebook.com/Nav-Technology-Pvt-Ltd-2856558957704521'
    },
    categories: [
      {
        slug: 'Service',
        name: 'Sony Service Center',
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,    
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-144336517-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "https://navtechnology.in",
      }
    }
  ],
}
