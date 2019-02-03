import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const BlogPage = () => {
  return (
    <Layout>
      <Container className="mt-3 mb-5">
        <Col md={10} lg={8} className="mx-auto px-0">
          <h1>포스트</h1>
          <PostList />
        </Col>
      </Container>
    </Layout>
  );
};

export default BlogPage;
