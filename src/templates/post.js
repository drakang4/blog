import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, fields, html, timeToRead } = markdownRemark;

  const { title, date, description, thumbnail, tags } = frontmatter;

  return (
    <article className="my-4">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://www.heeryongkang.me${fields.slug}`} />
        {/* Facebook Open Graph */}
        <meta property="fb:app_id" content="191342008318335" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.heeryongkang.me${fields.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`https://www.heeryongkang.me${thumbnail}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content={date} />
        <meta property="article:modified_time" content={date} />
        <meta property="article:author" content="Heeryong Kang" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={`https://www.heeryongkang.me${fields.slug}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`https://www.heeryongkang.me${thumbnail}`} />
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
      timeToRead
    }
  }
`;
