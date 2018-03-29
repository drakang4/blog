import React from 'react';

const TagsPage = () => {
  return (
    <div>
      
    </div>
  );
};

export default TagsPage;

export const allTagsQuery = graphql`
  query AllTags {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;
