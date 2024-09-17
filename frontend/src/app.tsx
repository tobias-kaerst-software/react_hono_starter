import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { useShallow } from 'zustand/react/shallow';

import { LanguageDropdown } from '$/components/core/LanguageDropdown';
import { ThemeSwitch } from '$/components/core/ThemeSwitch';
import { useInitializeLocale } from '$/hooks/useInitializeLocale';
import { Homepage } from '$/pages/Homepage';
import { useBearStore } from '$/stores/useBearStore';

export const App = () => {
  useInitializeLocale();

  const { overTen } = useBearStore(useShallow((s) => ({ overTen: s.bears > 10 })));
  console.count(`App rendered - ${overTen}`);

  return (
    <I18nProvider i18n={i18n}>
      <div className='min-h-screen w-full'>
        <div className='absolute left-5 top-5'>
          <LanguageDropdown />
        </div>

        <div className='absolute right-5 top-5'>
          <ThemeSwitch />
        </div>

        <Homepage />
      </div>
    </I18nProvider>
  );
};
