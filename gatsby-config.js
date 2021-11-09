module.exports = {
  siteMetadata: {
    title: "Holium",
    description: "Freely transform data.",
    siteUrl: "https://holium.org",
    image: "/logo.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@polyphenehq",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg-assets/
        }
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Holium`,
        short_name: `Holium`,
        description: `Holium`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#390048`,
        theme_color: `#AD6CD6`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '3',
        matomoUrl: 'https://analytics.polyphene.io',
        siteUrl: 'https://holium.org'
      }
    },
  ],
};
