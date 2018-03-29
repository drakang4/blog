import React, { Component } from 'react';
import Link from 'gatsby-link';
import {
  Collapse,
  Container,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Header extends Component {
  state = {
    opened: false,
  };

  handleNavToggle = () => {
    this.setState({ opened: !this.state.opened });
  };

  render() {
    return (
      <header>
        <Container>
          <Navbar light expand="md">
            <NavbarBrand tag={Link} to="/">
              Heeryong Kang
            </NavbarBrand>
            <NavbarToggler onClick={this.handleNavToggle} />
            <Collapse navbar isOpen={this.state.opened}>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/posts">
                    Blog
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto justify-content-right" navbar>
                <NavItem>
                  <NavLink href="https://github.com/drakang4">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </header>
    );
  }
}

export default Header;
