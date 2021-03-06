require('dotenv').config();
const path = require(`path`)

const siteUrl = process.env.GATSBY_SITE_URL;
const siteGraphql = process.env.GATSBY_SITE_ADMIN_URL + "/graphql";
const googleAnalytics = process.env.GATSBY_GOOGLE_ANALYTICS;

module.exports = {
  siteMetadata: {
    siteName: 'JDB 2M',
    title: `JDB 2M`,
    description: `JDB 2M`,
    author: `@Alex`,
    siteUrl: siteUrl,
    gSiteVerification: ''
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        entryLimit: 5000
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Barlow",
              variants: ["200", "300", "400", "500", "600", "700"],
            },
            {
              family: "Playfair Display:ital",
              variants: ["400", "400i", "600", "600i", "800", "800i"],
            },
          ]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: siteGraphql,
        useACF: true,
        html: {
          useGatsbyImage: true,
          createStaticFiles: true,
          imageMaxWidth: 1500,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          breakpoints: [750, 1080, 1366, 1920]
        }
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
  ],
};
