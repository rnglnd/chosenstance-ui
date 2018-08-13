module.exports = {
  siteMetadata: {
    title: 'Proverbs 3:6 | A Chosen Stance',
    author: 'The Chosen Stance Team'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-cxs'
  ],
};
