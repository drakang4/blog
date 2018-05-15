import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

const PostTemplate = ({ data }) => {
  const { markdownRemark, site } = data;

  const { frontmatter, fields, html, timeToRead } = markdownRemark;
  const { title, date, description, thumbnail, tags } = frontmatter;

  const { siteMetadata } = site;
  const { siteUrl } = siteMetadata;

  return (
    <article className="my-5">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${siteUrl}${fields.slug}`} />
        {/* Facebook Open Graph */}
        <meta property="fb:app_id" content="191342008318335" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${siteUrl}${fields.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`${siteUrl}${thumbnail.childImageSharp.sizes.src}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content={date} />
        <meta property="article:modified_time" content={date} />
        <meta property="article:author" content="Heeryong Kang" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={`${siteUrl}${fields.slug}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`${siteUrl}${thumbnail.childImageSharp.sizes.src}`}
        />
      </Helmet>
      <Container>
        <header>
          <Row>
            <Col md={10} lg={8} className="mx-auto">
              <h1 className>{title}</h1>
              <div className>
                <time dateTime={date}>{moment(date).format('LL')}</time>
                <span> · </span>
                <span>{timeToRead} 분 분량</span>
              </div>
            </Col>
          </Row>
        </header>
        <section>
          <Row className="my-3">
            <Col
              md={10}
              lg={8}
              className="mx-auto"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Row>
        </section>
        <section>
          <Row>
            <Col md={10} lg={8} className="mx-auto">
              <div
                className="fb-comments"
                data-href={`${siteUrl}${fields.slug}`}
                data-numposts="10"
                data-width="100%"
              />
            </Col>
          </Row>
        </section>
      </Container>
    </article>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
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
`;
