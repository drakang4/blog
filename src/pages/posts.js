import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import { Container, Row, Col, Badge } from 'reactstrap';
import moment from 'moment';

const PostsPage = ({ data }) => {
  const { allMarkdownRemark } = data;

  return (
    <Container className="my-4">
      <Row>
        <Col md={10} lg={8} className="mx-auto">
          {allMarkdownRemark.edges.map(({ node }) => (
            <Fragment key={node.frontmatter.title}>
              <div>
                <Link to={node.fields.slug}>
                  <h1>{node.frontmatter.title}</h1>
                </Link>
                <div>
                  <p>{node.frontmatter.description}</p>
                  <div>
                    {moment(node.frontmatter.date).format('MMMM Do, YYYY')}
                  </div>
                </div>
                <div className="tags">
                  {node.frontmatter.tags.map(tag => (
                    <Link key={tag} to={`/tags/${tag}`}>
                      <Badge>{tag}</Badge>
                    </Link>
                  ))}
                </div>
              </div>
              <hr />
            </Fragment>
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
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            thumbnail
            tags
          }
        }
      }
    }
  }
`;
