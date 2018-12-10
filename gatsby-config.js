module.exports = {
  siteMetadata: {
    title: 'Heeryong Kang Blog',
    siteUrl: 'https://www.heeryongkang.me',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-prismjs',
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-116620737-1',
        optimizeId: 'GTM-NGJMN49',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Heeryong Kang',
        short_name: 'Heeryong',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#1864ab',
        display: 'minimal-ui',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
