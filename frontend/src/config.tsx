import { GermanFlag, GreatBritainFlag } from '$/components/ui/icon';

export const config = {
  defaultLocale: 'de' as const,
  languages: [
    { icon: <GermanFlag />, label: 'Deutsch', locale: 'de' as const },
    { icon: <GreatBritainFlag />, label: 'English', locale: 'en' as const },
  ],
};
