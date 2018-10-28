import React, { Component } from 'react';
import { Link } from 'gatsby';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
  state = {
    opened: false,
  };

  handleNavToggle = () => {
    this.setState({ opened: !this.state.opened });
  };

  render() {
    const { opened } = this.state;

    return (
      <header>
        <Navbar
          // light={!scrolled}
          // dark={scrolled}
          // color={scrolled ? 'dark' : 'transparent'}
          light
          color="transparent"
          expand="md"
          role="navigation"
        >
          <Container>
            <NavbarBrand tag={Link} to="/">
              Heeryong Kang
            </NavbarBrand>
            <NavbarToggler onClick={this.handleNavToggle} />
            <Collapse navbar isOpen={opened}>
              <Nav className="mr-auto" navbar>
                {/* <NavItem>
                  <NavLink tag={Link} to="/blog">
                    블로그
                  </NavLink>
                </NavItem> */}
              </Nav>
              <Nav className="ml-auto justify-content-right" navbar>
                {/* <NavItem>
                  <NavLink href="https://github.com/drakang4">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                  </NavLink>
                </NavItem> */}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
