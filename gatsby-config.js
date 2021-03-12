require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Fodboldreglerne.dk`,
    description: `Universelle regler, nedfældet af det jammerlige talkshow Fodbold Ministeriet`,
    author: `@muldbjerg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {  
      resolve: 'gatsby-source-google-sheets',     
      options: {         
        spreadsheetId: '1wUk0sk2o1WMs4UMysLbThCfPUTi-WGPb2-8_pwJJodo',         
        worksheetTitle: 'Reglerne',       
        credentials: {
          "type": "service_account",
          "project_id": "fodboldreglerne",
          "private_key_id": process.env.GATSBY_GOOGLE_PRIVATE_KEY_ID.replace(/\\n/gm, '\n'),
          "private_key": process.env.GATSBY_GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
          "client_email": process.env.GATSBY_GOOGLE_CLIENT_EMAIL.replace(/\\n/gm, '\n'),
          "client_id": process.env.GATSBY_GOOGLE_CLIENT_ID.replace(/\\n/gm, '\n'),
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_x509_cert_url": process.env.GATSBY_GOOGLE_CLIENT_X509_CERT_URL.replace(/\\n/gm, '\n')
        }
      } 
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '2',
        matomoUrl: 'https://ANALYTICS.MULDBJERG.DK',
        siteUrl: 'https://FODBOLDREGLERNE.COM'
      }
    }
  ],
}
