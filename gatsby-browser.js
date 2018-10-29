/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n/i18n';

export const wrapRootElement = ({ element }) => {
  return (
    <I18nextProvider i18n={i18n} initialLanguage="ko">
      {element}
    </I18nextProvider>
  );
};
