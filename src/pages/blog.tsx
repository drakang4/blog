import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { MarkdownRemark } from '../types';
import PostListItem from '../components/PostListItem';

type Props = {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: MarkdownRemark;
        }
      ];
    };
  };
};

const BlogPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <div className="center mv4 ph3 mw7">
        <h1 className="f1 mb4 near-black">포스트</h1>
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostListItem data={node} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 100
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100, truncate: true)
          fields {
            slug
          }
          frontmatter {
            title
            date
            thumbnail {
              childImageSharp {
                fixed(width: 128, height: 128, quality: 80) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`;

export default BlogPage;
