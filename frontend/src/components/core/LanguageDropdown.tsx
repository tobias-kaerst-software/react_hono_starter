import { useLingui } from '@lingui/react';
import { useState } from 'react';

import { HStack } from '$/components/ui/hstack';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '$/components/ui/select';
import { config } from '$/config';
import { loadCatalog, Locale } from '$/lib/i18n';

export const LanguageDropdown = () => {
  const { i18n } = useLingui();
  const [value, setValue] = useState(i18n.locale);

  const onValueChange = async (v: Locale) => {
    setValue(v);
    await loadCatalog(v);
  };

  return (
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger className='gap-2'>
        <HStack>
          <SelectValue placeholder='Sprachen'>
            <div className='size-4 overflow-hidden rounded-full'>
              {config.languages.find(({ locale }) => locale === value)?.icon}
            </div>
          </SelectValue>
        </HStack>
      </SelectTrigger>

      <SelectContent className='w-[150px]'>
        {config.languages.map(({ icon, label, locale }) => (
          <SelectItem key={locale} value={locale}>
            <HStack>
              <span className='size-4 overflow-hidden rounded-full'>{icon}</span>
              <span>{label}</span>
            </HStack>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
