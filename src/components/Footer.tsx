import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container className="py-3 d-print-none">
        <Row>
          <Col className="text-center text-muted">
            Built with ❤️ using <a href="https://reactjs.org/">React</a> and{' '}
            <a href="https://www.gatsbyjs.org/">Gatsby</a> by Heeryong Kang
          </Col>
        </Row>
      </Container>
      <Container className="py-3 d-none d-print-block">
        <Row>
          <Col className="text-center text-muted">
            This résumé is also hosted on{' '}
            <a href="https://www.heeryongkang.me/">heeryongkang.me</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
