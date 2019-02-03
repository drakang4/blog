import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import i18n from '../i18n/i18n';

type State = {
  opened: boolean;
};

class Header extends Component<{}, State> {
  state = {
    opened: false,
  };

  handleNavToggle = () => {
    this.setState({ opened: !this.state.opened });
  };

  handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  render() {
    const { opened } = this.state;

    return (
      <header>
        <Navbar
          // light={!scrolled}
          // dark={scrolled}
          // color={scrolled ? 'dark' : 'transparent'}
          bg="light"
          expand="md"
          role="navigation"
        >
          <Navbar.Brand as={Link} to="/">
            Heeryong Kang
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.handleNavToggle} />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Item>
                <Nav.Link
                  href="#"
                  onSelect={() => this.handleChangeLanguage('en')}
                >
                  Eng
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#"
                  onSelect={() => this.handleChangeLanguage('ko')}
                >
                  Kor
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
