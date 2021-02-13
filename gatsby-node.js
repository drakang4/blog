const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('./src/templates/PostTemplate.tsx');

  const { data, errors } = await graphql(`
    {
      allMdx(filter: { frontmatter: { templateKey: { eq: "blog-post" } } }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild('There was an error loading your blog posts', errors);
    return;
  }

  const posts = data.allMdx.nodes;

  if (posts.length > 0) {
    posts.forEach((post) => {
      createPage({
        path: post.fields.slug,
        component: postTemplate,
        context: {
          id: post.id,
        },
      });
    });
  }
};

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === 'Mdx' &&
    node.frontmatter.templateKey === 'blog-post'
  ) {
    const relativePath = createFilePath({
      node,
      getNode,
      basePath: 'contents',
      trailingSlash: false,
    });
    createNodeField({
      name: 'slug',
      node,
      value: `/blog${relativePath}`,
    });
  }
};
