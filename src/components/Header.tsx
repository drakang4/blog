import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavLogo = styled(Link)`
  font-size: 32px;
  font-weight: 700;
  text-decoration: none;
  color: #333;
`;

const Header: React.FC = () => {
  return (
    <header className="no-print">
      <nav role="navigation">
        <Flex mx="auto" px={3} py={3}>
          <NavLogo to="/">Heeryong Kang</NavLogo>
        </Flex>
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
