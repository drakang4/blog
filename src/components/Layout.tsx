import React from 'react';
import Helmet from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

import '../styles/main.css';

const Layout: React.FC = ({ children }) => (
  <div>
    <Helmet>
      <html lang="ko" />
      <title>Heeryong Kang</title>
      <meta name="description" content="Heeryong Kang's blog" />
      <link rel="icon" sizes="192x192" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
    </Helmet>
    <Header />
    <main role="main">{children}</main>
    <Footer />
  </div>
);

export default Layout;
