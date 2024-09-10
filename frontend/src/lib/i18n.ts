import { i18n } from '@lingui/core';

import { config } from '$/config';

export type Locale = (typeof config.languages)[number]['locale'];

export const loadCatalog = async (locale: Locale) => {
  const { messages } = await import(`$/locales/${locale}.po`);
  i18n.loadAndActivate({ locale, messages });

  if (typeof window !== 'undefined') {
    window.localStorage.setItem('lang', locale);
  }
};
