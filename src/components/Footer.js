import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer>
      <Container className="py-3">
        <Row>
          <Col className="text-center text-muted">
            Built with ❤️ using <a href="https://reactjs.org/">React</a> and{' '}
            <a href="https://www.gatsbyjs.org/">Gatsby</a> by Heeryong Kang
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
