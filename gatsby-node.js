/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const PostTemplate = path.resolve(`src/templates/PostTemplate.js`);

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
            component: PostTemplate,

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

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const relativePath = createFilePath({
      node,
      getNode,
      basePath: 'src/posts',
    });
    createNodeField({
      name: 'slug',
      node,
      value: `/blog${relativePath}`,
    });

    node.frontmatter.thumbnail = path.relative(
      path.dirname(node.fileAbsolutePath),
      path.join(__dirname, '/static/', node.frontmatter.thumbnail),
    );
  }
};
