import React from 'react';
// import Link from 'gatsby-link';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <Container>
      <Row>
        <Col>
          <h1>Hello, world!</h1>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
