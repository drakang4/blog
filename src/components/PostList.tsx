import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col, Badge } from 'react-bootstrap';

type Props = {
  data: any;
};

const PostList: React.FC<Props> = ({ data }) => {
  const { allMarkdownRemark } = data;

  const language =
    typeof window !== 'undefined' ? window.navigator.language : 'en';

  return (
    <Row>
      <Col>
        {allMarkdownRemark.edges.map(({ node }, index, array) => (
          <Row
            key={node.frontmatter.title}
            className={`py-2 mb-4 ${index !== array.length - 1 &&
              'border-bottom'}`}
          >
            <Col>
              <Link to={node.fields.slug}>
                <p className="mb-1">
                  <big>
                    <b>{node.frontmatter.title}</b>
                  </big>
                </p>
              </Link>
              <div>
                <p>{node.excerpt}</p>
                <div>
                  {new Intl.DateTimeFormat(language, {
                    year:
                      new Date(node.frontmatter.date).getFullYear() ===
                      new Date().getFullYear()
                        ? undefined
                        : 'numeric',
                    month: 'short',
                    day: 'numeric',
                  }).format(new Date(node.frontmatter.date))}
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
              <Img fixed={node.frontmatter.thumbnail.childImageSharp.fixed} />
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
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
                    fixed(width: 125, height: 125, quality: 80) {
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
