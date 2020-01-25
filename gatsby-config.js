module.exports = {
  siteMetadata: {
    title: `Calculadora da Morte`,
    description: `Quanto a corrupção mata? Com o calculadora da morte você pode ter uma estimativa.`,
    author: `@bolonhadev`,
    expVida: 76,
    salarioMinimo: 1045,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#1f3253`,
        display: `minimal-ui`,
        icon: `static/assets/images/favicon.gif`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
