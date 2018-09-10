import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Post from '../components/Post';
import Layout from '../components/Layout';

const PostTemplate = ({ data }) => (
  <Layout>
    <Post data={data} />;
  </Layout>
);

PostTemplate.propTypes = {
  data: PropTypes.object,
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
              src
            }
          }
        }
        tags
      }
      timeToRead
    }
  }
`;
