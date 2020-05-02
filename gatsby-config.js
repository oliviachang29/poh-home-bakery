require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})



module.exports = {
  siteMetadata: {
    title: "Mrs. Poh's Home Bakery",
    description: 'Delicious pastries from a home bakery in Penang.',
    siteUrl: 'https://pohbakery.netlify.app',
    adsense: '',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    // Add and modify this plugin config to your `gatsby-config.js`:
{
  resolve: "gatsby-source-google-spreadsheet",
  options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        spreadsheetName: "DataSheet",
        typePrefix: "GoogleSpreadsheet",
        // netlify doeesn't handle \n too well
        //  we give a private key with _ as \n, then replace it here
        credentials: {
          client_email: process.env.CLIENT_EMAIL,
          private_key: process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY.replace(/_/g, '\n') : ''
        },
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Mrs. Poh Home Bakery',
        short_name: 'Poh Bakery',
        description: 'Delicious pastries from a home bakery in Penang.',
        homepage_url: 'https://pohbakery.netlify.app',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#673ab7',
        display: 'standalone',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-transformer-sharp',
  ],
}
