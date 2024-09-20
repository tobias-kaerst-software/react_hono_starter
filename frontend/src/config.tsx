import { z } from 'zod';

import { GermanFlag, GreatBritainFlag } from '$/components/ui/icon';

export const config = {
  defaultLocale: 'de' as const,
  fetcher: {
    defaultStaleTime: 1000 * 60 * 10,
  },
  languages: [
    { icon: <GermanFlag />, label: 'Deutsch', locale: 'de' as const },
    { icon: <GreatBritainFlag />, label: 'English', locale: 'en' as const },
  ],
};

export const env = z
  .object({
    VITE_BACKEND_URL: z.string(),
  })
  .parse(import.meta.env);
