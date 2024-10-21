import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useShallow } from 'zustand/react/shallow';

import { LanguageDropdown } from '$/components/common/LanguageDropdown';
import { ThemeProvider } from '$/components/common/theme/ThemeProvider';
import { ThemeSwitch } from '$/components/common/theme/ThemeSwitch';
import { useInitializeLocale } from '$/hooks/useInitializeLocale';
import { queryClient } from '$/lib/fetcher';
import { Homepage } from '$/pages/Homepage';
import { useBearStore } from '$/stores/useBearStore';

export const App = () => {
  useInitializeLocale();

  const { overTen } = useBearStore(useShallow((s) => ({ overTen: s.bears > 10 })));
  console.count(`App rendered - ${overTen}`);

  return (
    <I18nProvider i18n={i18n}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <div className='min-h-screen w-full'>
            <div className='absolute left-5 top-5'>
              <LanguageDropdown />
            </div>

            <div className='absolute right-5 top-5'>
              <ThemeSwitch />
            </div>

            <Homepage />
          </div>
        </QueryClientProvider>
      </ThemeProvider>
    </I18nProvider>
  );
};
