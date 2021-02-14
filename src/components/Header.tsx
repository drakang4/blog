import React from 'react';
import { Link } from 'gatsby';
import Toggle from './Toggle';

const Header = () => {
  return (
    <header className="no-print flex justify-between p-4">
      <nav>
        <Link
          to="/"
          className="text-lg font-bold text-gray-900 dark:text-gray-100"
        >
          Heeryong Kang
        </Link>
      </nav>
      <Toggle />
      {/* <Navbar
        // light={!scrolled}
        // dark={scrolled}
        // color={scrolled ? 'dark' : 'transparent'}
        bg="transparent"
        expand="md"
        expanded={opened}
        onToggle={this.handleNavToggle}
        role="navigation"
      >
        <Navbar.Brand as={Link} to="/">
          Heeryong Kang
        </Navbar.Brand>
        <Navbar.Toggle />
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
      </Navbar> */}
    </header>
  );
};

export default Header;
