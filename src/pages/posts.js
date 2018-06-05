import React from 'react';
import { StaticQuery } from 'gatsby';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { Container, Row, Col, Badge } from 'reactstrap';
import format from 'date-fns/format';
import isThisYear from 'date-fns/is_this_year';
import ko from 'date-fns/locale/ko';
import Layout from '../components/Layout';

const PostsPage = data => {
  const { allMarkdownRemark } = data;

  return (
    <Layout>
      <Container className="my-5">
        <Row>
          <Col md={10} lg={8} className="mx-auto">
            {allMarkdownRemark.edges.map(({ node }, index, array) => (
              <Row
                key={node.frontmatter.title}
                className={`py-2 mb-4 ${index !== array.length - 1 &&
                  'border-bottom'}`}
              >
                <Col>
                  <Link to={node.fields.slug}>
                    <h1>{node.frontmatter.title}</h1>
                  </Link>
                  <div>
                    <p>{node.excerpt}</p>
                    <div>
                      {format(
                        node.frontmatter.date,
                        `${
                          isThisYear(node.frontmatter.date) ? '' : 'YYYY[년] '
                        }MMMM Do`,
                        { locale: ko },
                      )}
                    </div>
                  </div>
                  <div className="tags">
                    {node.frontmatter.tags.map(tag => (
                      // <Link key={tag} to={`/tags/${tag}`}>
                      <Badge key={tag} color="light" className="mr-1">
                        {tag}
                      </Badge>
                      // </Link>
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
    </Layout>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={PostsPage}
  />
);
