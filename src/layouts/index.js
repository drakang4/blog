import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands'
import moment from 'moment';

import Header from '../components/Header';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import 'prismjs/themes/prism-tomorrow.css';
import './index.css';

fontawesome.library.add(brands);

moment.locale('ko');

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
    {children()}
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
