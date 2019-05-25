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

  const PostTemplate = path.resolve(`src/templates/PostTemplate.tsx`);

  return graphql`
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
  `.then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      throw result.errors;
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: edge.node.fields.slug,
        component: PostTemplate,

        // additional data can be passed via context
        context: {
          id: edge.node.id,
        },
      });
    });
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
