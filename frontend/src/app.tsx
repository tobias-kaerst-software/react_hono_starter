import { i18n } from '@lingui/core';
import { Trans } from '@lingui/macro';
import { I18nProvider } from '@lingui/react';

import { LanguageDropdown } from '$/components/core/LanguageDropdown';
import { ThemeSwitch } from '$/components/core/ThemeSwitch';
import { Button } from '$/components/ui/button';
import { Stack } from '$/components/ui/stack';
import { Typography } from '$/components/ui/typography';
import { useInitializeLocale } from '$/hooks/useInitializeLocale';

export const App = () => {
  useInitializeLocale();

  return (
    <I18nProvider i18n={i18n}>
      <div className='min-h-screen w-full'>
        <div className='absolute left-5 top-5'>
          <LanguageDropdown />
        </div>

        <div className='absolute right-5 top-5'>
          <ThemeSwitch />
        </div>

        <Stack className='container max-w-[750px] gap-10 pt-24'>
          <div>
            <Typography variant='h1'>
              <Trans>The Joke Tax Chronicles</Trans>
            </Typography>
            <Typography variant='p'>
              <Trans>
                Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his
                throne. One day, his advisors came to him with a problem: the kingdom was running out of money.
              </Trans>
            </Typography>
            <Typography variant='h2'>The King&apos;s Plan</Typography>
            <Typography variant='p'>
              Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.
              One day, his advisors came to him with a problem: the kingdom was running out of money.
            </Typography>
          </div>
          <Button className='w-full'>Click me</Button>
        </Stack>
      </div>
    </I18nProvider>
  );
};
