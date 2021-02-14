import React from 'react';

import App from './src/App';

import 'prismjs/themes/prism-tomorrow.css';
import './src/styles/main.css';

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>;
};
