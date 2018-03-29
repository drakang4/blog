import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands'
import moment from 'moment';

import Header from '../components/Header';

import 'bootstrap/dist/css/bootstrap.css';

fontawesome.library.add(brands);

moment.locale('ko');

const Layout = ({ children }) => (
  <Fragment>
    <Helmet>
      <html lang="ko" />
      <title>Gatsby Default Starter</title>
      <meta name="description" content="Sample" />
      <meta name="keywords" content="sample, something" />
    </Helmet>
    <Header />
    {children()}
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
