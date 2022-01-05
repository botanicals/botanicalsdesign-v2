require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Botanicals Design',
    description: 'BOTANICALS offers custom plantscape design and installations, plant maintenance services, and three retail locations selling pottery, containers, and yard decor.',
    imagePath: '/heroes/home-small-1x.jpg',
    baseUrl: 'https://botanicalsdesign.com',
    siteUrl: 'https://botanicalsdesign.com',
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        maxResults: 100,
        context: true,
        tags: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [],
      },
    },
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: "1242267082891853",
    //   },
    // },
  ],
};
