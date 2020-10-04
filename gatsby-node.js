/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
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
  `);

  if (errors) {
    errors.forEach((e) => console.error(e.toString()));
    throw result.errors;
  }

  data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`src/templates/PostTemplate.tsx`),

      // additional data can be passed via context
      context: {
        id: edge.node.id,
      },
    });
  });
};

exports.onCreateNode = async ({ node, actions, getNode }) => {
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
  }
};
