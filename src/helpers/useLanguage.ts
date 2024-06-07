import { useState } from 'react';

export enum LocaleEnum {
  Pt = 'pt',
  En = 'en',
}

type UseLanguageResult = {
  locale: string;
  changeLocale: (args: string) => void;
};

const defaultLocale = 'pt';

export const useLanguage = (): UseLanguageResult => {
  const locales = Object.values(LocaleEnum) as string[];

  const getLocaleInStorage = (): string => {
    const navigatorLocale = navigator.language.split('-')?.[0];
    const saveLocale = localStorage.getItem('@locale');

    if (saveLocale && locales?.includes(saveLocale)) return saveLocale;
    else if (locales.includes(navigatorLocale)) return navigatorLocale;

    return defaultLocale;
  };

  const [locale, setLocale] = useState(() => {
    return getLocaleInStorage();
  });

  const changeLocale = (newLocale: string) => {
    if (locales.includes(newLocale) && newLocale !== locale) {
      localStorage.setItem('@locale', newLocale);
      setLocale(newLocale);
      window.location.reload();
    }
  };

  return {
    locale,
    changeLocale,
  };
};
