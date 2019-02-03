import React from 'react';
import { graphql } from 'gatsby';
import Post from '../components/Post';
import Layout from '../components/Layout';

type Props = {
  data: Object;
};

const PostTemplate: React.FC<Props> = ({ data }) => (
  <Layout>
    <Post data={data} />;
  </Layout>
);

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
