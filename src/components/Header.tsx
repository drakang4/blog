import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header: React.FC = () => {
  return (
    <header className="no-print">
      <nav role="navigation">
        <div className="center flex pa3">
          <Link to="/" className="f4 fw7 link dim near-black">
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
