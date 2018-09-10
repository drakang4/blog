import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

import Header from './Header';
import Footer from './Footer';

import '../styles/main.scss';
import 'prismjs/themes/prism-tomorrow.css';

library.add(faGithub);

const Layout = ({ children }) => (
  <>
    <Helmet>
      <html lang="ko" />
      <title>Heeryong Kang</title>
      <meta name="description" content="Heeryong Kang's blog" />
      {/* <link rel="icon" sizes="192x192" href="/path/to/icon.png"> */}
      {/* <link rel="apple-touch-icon" href="/custom-icon.png"> */}
      {/* <link rel="mask-icon" href="/path/to/icon.svg" color="blue"> */}
    </Helmet>
    <Header />
    <main role="main">{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
