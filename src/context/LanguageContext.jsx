import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('martins_language');
      if (saved === 'ar' || saved === 'en') {
        return saved;
      }
    } catch (e) {
      console.error('Error reading saved language:', e);
    }
    return 'en';
  });

  const isAr = lang === 'ar';

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = isAr ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('martins_language', lang);
    } catch (e) {
      console.error('Error saving language:', e);
    }
  }, [lang, isAr]);

  const setLanguage = useCallback((newLang) => {
    if (newLang === 'ar' || newLang === 'en') {
      setLangState(newLang);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLangState((prev) => (prev === 'ar' ? 'en' : 'ar'));
  }, []);

  /**
   * Helper function to get translated string by dot notation path (e.g. 'nav.home')
   */
  const t = useCallback(
    (path, fallback = '') => {
      const keys = path.split('.');
      
      // Try current language
      let result = translations[lang];
      for (const key of keys) {
        if (result && typeof result === 'object' && key in result) {
          result = result[key];
        } else {
          result = undefined;
          break;
        }
      }

      if (result !== undefined) {
        return result;
      }

      // Fallback to English
      let fallbackResult = translations.en;
      for (const key of keys) {
        if (fallbackResult && typeof fallbackResult === 'object' && key in fallbackResult) {
          fallbackResult = fallbackResult[key];
        } else {
          fallbackResult = undefined;
          break;
        }
      }

      if (fallbackResult !== undefined) {
        return fallbackResult;
      }

      return fallback || path;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider
      value={{
        lang,
        isAr,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
