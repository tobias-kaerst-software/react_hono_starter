import type { LinguiConfig } from '@lingui/conf';

const config: LinguiConfig = {
  catalogs: [{ include: ['src'], path: 'src/locales/{locale}' }],
  locales: ['de', 'en'],
  sourceLocale: 'de',
};

export default config;
