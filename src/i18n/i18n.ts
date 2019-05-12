import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import enResume from './en/resume.json';
import koResume from './ko/resume.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
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
  });

export default i18n;
