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
    scrolled: false,
    opened: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleNavToggle = () => {
    this.setState({ opened: !this.state.opened });
  };

  handleScroll = event => {
    this.setState({ scrolled: window.scrollY > 0 });
  };

  render() {
    const { scrolled, opened } = this.state;

    return (
      <header>
        <Navbar
          light={!scrolled}
          dark={scrolled}
          color={scrolled ? 'dark' : 'transparent'}
          expand="md"
          role="navigation"
        >
          <Container>
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
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;
