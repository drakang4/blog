import React from 'react';
import { graphql } from 'gatsby';
import Post from '../components/Post';
import Layout from '../components/Layout';
import Helmet from 'react-helmet';

type Props = {
  data: Object;
};

const PostTemplate: React.FC<Props> = ({ data }) => (
  <Layout>
    <Helmet>
      {/* Utterances Comment System */}
      <script
        src="https://utteranc.es/client.js"
        repo="drakang4/blog"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async
      />
    </Helmet>
    <Post data={data} />
    <div className="utterances" />
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
