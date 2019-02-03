import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';

type Props = {
  data: any;
};

const Post: React.FC<Props> = ({ data }) => {
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
        {/* Utterances Comment System */}
        <script
          src="https://utteranc.es/client.js"
          repo="drakang4/blog"
          issue-term="pathname"
          label="Comment"
          theme="github-light"
          crossorigin="anonymous"
          async
        />
      </Helmet>
      <Container>
        <header>
          <Row>
            <Col md={10} lg={8} className="mx-auto">
              <h1>{title}</h1>
              <div className="metadata">
                <time dateTime={date}>
                  {new Intl.DateTimeFormat(navigator.language, {
                    year:
                      new Date(date).getFullYear() === new Date().getFullYear()
                        ? undefined
                        : 'numeric',
                    month: 'short',
                    day: 'numeric',
                  }).format(new Date(date))}
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

export default Post;
