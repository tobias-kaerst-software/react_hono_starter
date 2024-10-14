import { detect, fromNavigator, fromStorage } from '@lingui/detect-locale';
import { useEffect } from 'react';

import { config } from '$/config';
import { loadCatalog } from '$/lib/i18n';

export const useInitializeLocale = () => {
  useEffect(() => {
    const detected = detect(fromStorage('lang'), fromNavigator());
    const foundLocale = config.languages.find(({ locale }) => detected?.startsWith(locale))?.locale;
    loadCatalog(foundLocale ?? config.defaultLocale);
  }, []);
};
