import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="no-print">
      <nav>
        <div className="p-4">
          <Link
            to="/"
            className="text-lg font-bold text-gray-900 dark:text-gray-100"
          >
            Heeryong Kang
          </Link>
        </div>
      </nav>
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
