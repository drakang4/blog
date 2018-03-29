/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const changeCase = require('change-case');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/post.js`);

    resolve(
      graphql(`
        {
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  date
                  description
                  thumbnail
                  tags
                }
                timeToRead
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          result.errors.forEach(e => console.error(e.toString()));
          return reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(edge => {
          const id = edge.node.id;
          createPage({
            path: edge.node.fields.slug,
            component: postTemplate,

            // additional data can be passed via context
            context: {
              id,
            },
          });
        });
      }),
    );
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const relativePath = createFilePath({ node, getNode, basePath: 'src/posts' });
    createNodeField({
      name: 'slug',
      node,
      value: `/posts${relativePath}`,
    });
  }
};
