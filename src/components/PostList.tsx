import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Card, Text, Heading, Flex } from 'rebass';
import { formatDate } from '../utils/i18n';

type Props = {
  data: any;
};

const PostList: React.FC<Props> = ({ data }) => {
  const { allMarkdownRemark } = data;

  return (
    <Box>
      {allMarkdownRemark.edges.map(({ node }) => (
        <Card key={node.frontmatter.title} py={2} mb={4}>
          <Flex flexDirection={['column', 'row']}>
            <Box flex={1}>
              <Link to={node.fields.slug}>
                <Heading as="h2" fontSize={5} fontWeight={700} mb={3}>
                  {node.frontmatter.title}
                </Heading>
              </Link>
              <Box>
                <Text mb={3}>{node.excerpt}</Text>
                <Text>{formatDate(node.frontmatter.date)}</Text>
              </Box>
              {/* <div className="tags">
              {node.frontmatter.tags.map(tag => (
                // <Link key={tag} to={`/tags/${tag}`}>
                <Badge key={tag} color="light" className="mr-1">
                  {tag}
                </Badge>
                // </Link>
              ))}
            </div> */}
            </Box>
            <Link to={node.fields.slug}>
              <Img fixed={node.frontmatter.thumbnail.childImageSharp.fixed} />
            </Link>
            <Box />
          </Flex>
        </Card>
      ))}
    </Box>
  );
};

const PostListWithQuery = (props: any) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          limit: 5
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                date
                thumbnail {
                  childImageSharp {
                    fixed(width: 200, height: 200, quality: 80) {
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
    `}
    render={data => <PostList data={data} {...props} />}
  />
);

export default PostListWithQuery;
