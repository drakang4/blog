import React from 'react';
import Toggle from './Toggle';

const Footer = () => (
  <footer className="no-print px-4 mx-auto max-w-screen-2xl">
    <div className="text-center py-8">
      Built with ❤️ using <a href="https://reactjs.org/">React</a> and{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby</a> by Heeryong Kang
    </div>
    <div className="flex justify-end py-4">
      <Toggle />
    </div>
  </footer>
);

export default Footer;
