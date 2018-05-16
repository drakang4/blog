import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { Container, Row, Col, Badge } from 'reactstrap';
import moment from 'moment';

const PostsPage = ({ data }) => {
  const { allMarkdownRemark } = data;

  return (
    <Container className="my-5">
      <Row>
        <Col md={10} lg={8} className="mx-auto">
          {allMarkdownRemark.edges.map(({ node }) => (
            <Row key={node.frontmatter.title} className="mb-4">
              <Col>
                <Link to={node.fields.slug}>
                  <h1>{node.frontmatter.title}</h1>
                </Link>
                <div>
                  <p>{node.excerpt}</p>
                  <div>
                    {moment(node.frontmatter.date).format('MMMM Do, YYYY')}
                  </div>
                </div>
                <div className="tags">
                  {node.frontmatter.tags.map(tag => (
                    <Link key={tag} to={`/tags/${tag}`}>
                      <Badge className="mr-1">{tag}</Badge>
                    </Link>
                  ))}
                </div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
                <Img
                  resolutions={
                    node.frontmatter.thumbnail.childImageSharp.resolutions
                  }
                />
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default PostsPage;

export const allPostsQuery = graphql`
  query AllPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
                resolutions(width: 125, height: 125, quality: 80) {
                  ...GatsbyImageSharpResolutions_withWebp
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
