import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="no-print flex justify-between p-4 mx-auto max-w-screen-2xl">
      <nav>
        <Link
          to="/"
          className="text-lg font-bold text-gray-900 dark:text-gray-100"
        >
          Heeryong Kang
        </Link>
      </nav>
      <nav>
        <Link to="/blog" className="text-gray-900 dark:text-gray-100">
          Blog
        </Link>
      </nav>
    </header>
  );
};

export default Header;
