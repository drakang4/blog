import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import enResume from './en/resume.json';
import koResume from './ko/resume.json';

i18n
  // .use(XHR)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    ns: ['resume'],
    resources: {
      en: {
        resume: enResume,
      },
      ko: {
        resume: koResume,
      },
    },

    // react i18next special options (optional)
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  });

export default i18n;
