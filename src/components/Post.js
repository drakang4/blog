import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { DiscussionEmbed } from 'disqus-react';
import { DateTime } from 'luxon';

const Post = ({ data }) => {
  const { markdownRemark, site } = data;

  const { frontmatter, excerpt, fields, html, timeToRead } = markdownRemark;
  const { title, date, thumbnail, tags } = frontmatter;

  const { siteMetadata } = site;
  const { siteUrl } = siteMetadata;

  return (
    <article className="my-3">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <link rel="canonical" href={`${siteUrl}${fields.slug}`} />
        {/* Facebook Open Graph */}
        <meta property="fb:app_id" content="191342008318335" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${siteUrl}${fields.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:image"
          content={`${siteUrl}${thumbnail.childImageSharp.fluid.src}`}
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
        <meta name="twitter:description" content={excerpt} />
        <meta
          name="twitter:image"
          content={`${siteUrl}${thumbnail.childImageSharp.fluid.src}`}
        />
      </Helmet>
      <Container>
        <header>
          <Row>
            <Col md={10} lg={8} className="mx-auto">
              <h1>{title}</h1>
              <div className="metadata">
                <time dateTime={date}>
                  {DateTime.fromISO(date).toLocaleString({
                    year:
                      DateTime.local().year === DateTime.fromISO(date).year
                        ? undefined
                        : 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
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
              <DiscussionEmbed
                shortname="heeryongkang"
                config={{
                  url: `${siteUrl}${fields.slug}`,
                  identifier: fields.slug,
                  title,
                }}
              />
            </Col>
          </Row>
        </section>
      </Container>
    </article>
  );
};

Post.propTypes = {
  data: PropTypes.object,
};

export default Post;
