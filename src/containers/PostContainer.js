import React from 'react';
import { StaticQuery } from 'gatsby';
import Post from '../components/Post';

const PostContainer = () => (
  <StaticQuery
    query={graphql`
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
                sizes(maxWidth: 1200, quality: 80) {
                  src
                }
              }
            }
            tags
          }
          timeToRead
        }
      }
    `}
    render={Post}
  />
);

export default PostContainer;
