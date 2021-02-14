module.exports = {
  siteMetadata: {
    defaultTitle: '강희룡',
    description: '프론트엔드 개발자 강희룡 블로그',
    siteUrl: 'https://www.heeryongkang.me',
    logo: '/favicon.png',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/contents/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/contents/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/contents/resume`,
        name: 'resume',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          'gatsby-remark-prismjs',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WGKT7SQ',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Heeryong Kang',
        short_name: 'Heeryong Kang',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#333333',
        display: 'minimal-ui',
        icon: 'static/favicon.png',
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) =>
    //           allMarkdownRemark.edges.map((edge) => ({
    //             ...edge.node.frontmatter,
    //             description: edge.node.excerpt,
    //             date: edge.node.frontmatter.date,
    //             url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //             guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //             custom_elements: [{ 'content:encoded': edge.node.html }],
    //           })),
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    //               sort: { fields: [frontmatter___date], order: DESC }
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt
    //                   fields {
    //                     slug
    //                   }
    //                   html
    //                   fields { slug }
    //                   frontmatter {
    //                     title
    //                     date
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //         title: 'RSS Feed',
    //         // optional configuration to insert feed reference in pages:
    //         // if `string` is used, it will be used to create RegExp and then test if pathname of
    //         // current page satisfied this regular expression;
    //         // if not provided or `undefined`, all pages will have feed reference inserted
    //         match: '^/blog/',
    //       },
    //     ],
    //   },
    // },
  ],
};
