import React from 'react';
import Helmet from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';

import Header from './Header';
import Footer from './Footer';

import '../styles/main.scss';

library.add(faEnvelope, faExternalLinkAlt, faGithub, faLinkedin);

const Layout: React.FC = ({ children }) => (
  <div className="sans-serif">
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
