import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationAR from './locales/arabic/translation.json';
import translationFN from './locales/fr/translation.json';


// Translation resources
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
  fn:{
    translation: translationFN,
  }

};

i18n
  .use(LanguageDetector) // Automatically detects user language
  .use(initReactI18next)  // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,  // Optional, enables logging for development
    interpolation: {
      escapeValue: false,  // React already handles XSS
    },
    detection: {
      // Options for language detection
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],  // Cache the language choice in localStorage/cookies
    },
  });

export default i18n;
