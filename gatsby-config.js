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
        name: `Calculadora da Morte`,
        short_name: `CalcMorte`,
        start_url: `/`,
        background_color: `#1f3253`,
        theme_color: `#1f3253`,
        display: `fullscreen`,
        icon: `static/assets/images/favicon.gif`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
}
