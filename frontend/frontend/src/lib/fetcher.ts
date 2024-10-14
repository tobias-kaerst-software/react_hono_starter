import type { Input, KyResponse, Options } from 'ky';

import { QueryClient } from '@tanstack/react-query';
import ky from 'ky';
import { z } from 'zod';

import { config, env } from '$/config';
import { logger } from '$/lib/logger';

export const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: config.fetcher.defaultStaleTime } },
});

const kyClient = ky.create({ prefixUrl: env.VITE_BACKEND_URL });
const kyParser = async <T extends z.ZodTypeAny>(schema: T, res: KyResponse) => {
  try {
    const rawJson = await res.json();
    const parsed = schema.safeParse(rawJson);

    if (!parsed.success) {
      logger([parsed.error.format(), rawJson]);
      throw new Error('failed to parse response');
    }

    return parsed.data as z.infer<T>;
  } catch (error) {
    logger([error, res.body]);
    throw new Error('failed to parse response');
  }
};

export const http = {
  delete: async <T extends z.ZodTypeAny>(url: Input, options: { schema: T } & Options) => {
    return kyParser(options.schema, await kyClient.delete(url, options));
  },
  get: async <T extends z.ZodTypeAny>(url: Input, options: { schema: T } & Options) => {
    return kyParser(options.schema, await kyClient.get(url, options));
  },
  patch: async <T extends z.ZodTypeAny>(url: Input, options: { schema: T } & Options) => {
    return kyParser(options.schema, await kyClient.patch(url, options));
  },
  post: async <T extends z.ZodTypeAny>(url: Input, options: { schema: T } & Options) => {
    return kyParser(options.schema, await kyClient.post(url, options));
  },
  put: async <T extends z.ZodTypeAny>(url: Input, options: { schema: T } & Options) => {
    return kyParser(options.schema, await kyClient.put(url, options));
  },
};
