import React from 'react';
import { Link, graphql } from 'gatsby';
import { NamespacesConsumer } from 'react-i18next';
import Helmet from 'react-helmet';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const IndexPage = ({ data }) => {
  const {
    site: { siteMetadata },
  } = data;
  const { siteUrl } = siteMetadata;

  return (
    <NamespacesConsumer>
      {t => (
        <>
          <Layout>
            <Container className="my-5" style={{ maxWidth: 768 }}>
              <Row className="mb-4">
                <Col>
                  <h1>{t('resume:name')}</h1>
                  <p className="lead">{t('resume:introduction')}</p>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <h3>{t('resume:contact')}</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <FontAwesomeIcon
                        icon="envelope"
                        size="lg"
                        fixedWidth
                        className="mr-3"
                      />
                      <a href="mailto:hi@heeryongkang.me">hi@heeryongkang.me</a>
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon
                        icon={['fab', 'github']}
                        size="lg"
                        fixedWidth
                        className="mr-3"
                      />
                      <a
                        href="https://github.com/drakang4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/drakang4
                      </a>
                    </li>
                    <li className="mb-3">
                      <FontAwesomeIcon
                        icon={['fab', 'linkedin']}
                        size="lg"
                        fixedWidth
                        className="mr-3"
                      />
                      <a
                        href="https://www.linkedin.com/in/drakang4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/drakang4
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <h3>{t('resume:tech stacks')}</h3>
                  <Row>
                    <Col>
                      <h5 className="mb-1">{t('resume:javascript tech')}</h5>
                      <p>
                        ECMAScript 2018, TypeScript, React, Electron, GatsbyJS,
                        Express
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5 className="mb-1">{t('resume:backend tech')}</h5>
                      <p>AWS, Go, GraphQL, MySQL. MongoDB</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5 className="mb-1">{t('resume:development tools')}</h5>
                      <p>Git, CI/CD, Docker</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <h3>{t('resume:work experiences')}</h3>
                  <Row>
                    <Col>
                      <h5 className="mb-0 d-inline-block">
                        {t('resume:noom')}
                      </h5>
                      <span className="font-weight-light font-size-1 ml-2">
                        2017.11 - 2018.02
                      </span>
                      <p>{t('resume:noom title')}</p>
                      <ul>
                        <li>{t('resume:noom line 1')}</li>
                        <li>{t('resume:noom line 2')} </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <h3>{t('resume:side projects')}</h3>
                  <Row>
                    <Col>
                      <h5 className="mb-1 d-inline-block">
                        {t('resume:jamak')}
                        <a
                          href="https://github.com/drakang4/jamak"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon="external-link-alt"
                            size="sm"
                            className="ml-2 d-print-none"
                          />
                        </a>
                      </h5>

                      <span className="font-weight-light font-size-1 ml-2">
                        In Progress
                      </span>
                      <ul>
                        <li>{t('resume:jamak line 1')}</li>
                        <li>{t('resume:jamak line 2')}</li>
                        <li>{t('resume:jamak line 3')}</li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5 className="mb-1 d-inline-block">
                        {t('resume:gfcalendar')}
                        <a
                          href="https://github.com/drakang4/gfcalendar-demo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon
                            icon="external-link-alt"
                            size="sm"
                            className="ml-2 d-print-none"
                          />
                        </a>
                      </h5>
                      <span className="font-weight-light font-size-1 ml-2">
                        2017.03 - 2017.06
                      </span>
                      <ul>
                        <li>{t('resume:gfcalendar line 1')}</li>
                        <li>{t('resume:gfcalendar line 2')}</li>
                        <li>{t('resume:gfcalendar line 3')}</li>
                        <li>{t('resume:gfcalendar line 4')}</li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>{t('resume:education')}</h3>
                  <ul>
                    <li>
                      {t('resume:university')}
                      <span className="font-weight-light font-size-1 ml-2">
                        17.03 - {t('resume:univ status')}
                      </span>
                    </li>
                    <li>
                      {t('resume:high school')}
                      <span className="font-weight-light font-size-1 ml-2">
                        14.03 - 17.02
                      </span>
                    </li>
                  </ul>
                </Col>
              </Row>

              {/* <Row>
            <Col>
              <h3>블로그</h3>
              <PostList />
              <Link to="/blog">
                <Button color="primary">더보기</Button>
              </Link>
            </Col>
          </Row> */}
            </Container>
          </Layout>
          <Helmet>
            <title>{t('resume:name')}</title>
            <meta name="description" content={t('resume:introduction')} />
            <link rel="canonical" href={siteUrl} />
            <meta property="fb:app_id" content="191342008318335" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={t('resume:name')} />
            <meta
              property="og:description"
              content={t('resume:introduction')}
            />
          </Helmet>
        </>
      )}
    </NamespacesConsumer>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`;
