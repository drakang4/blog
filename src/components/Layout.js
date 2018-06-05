import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';

import Header from './Header';
import Footer from './Footer';

import '../styles/main.scss';
import 'prismjs/themes/prism-tomorrow.css';

fontawesome.library.add(brands);

const Layout = ({ children }) => (
  <Fragment>
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
  </Fragment>
);

export default Layout;
