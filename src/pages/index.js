import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col, Button } from 'reactstrap';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const IndexPage = () => {
  return (
    <Layout>
      <Container className="mt-3 mb-5">
        <Row className="mb-4">
          <Col>
            <h1>
              Tech and Art, <br />
              For Everyone.
            </h1>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h3>희룡은 웹 개발자입니다.</h3>
            TBD
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h3>희룡은 비디오 크리에이터입니다.</h3>
            TBD
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h3>희룡은 스타트업에 관심이 많습니다.</h3>
            TBD
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>블로그</h2>
            <PostList />
            <Link to="/blog">
              <Button color="primary">더보기</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
