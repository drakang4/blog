import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;

  const { title, date, description, thumbnail, tags } = frontmatter;

  return (
    <article className="my-4">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Container>
        <Row>
          <Col md={10} lg={8} className="mx-auto">
            <h1 className>{title}</h1>
            <h5 className>{`${date} ${timeToRead} min read`}</h5>
          </Col>
        </Row>
        <Row className="my-3">
          <Col
            md={10}
            lg={8}
            className="mx-auto"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Row>
      </Container>
    </article>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date
        description
        thumbnail
        tags
      }
      timeToRead
    }
  }
`;
