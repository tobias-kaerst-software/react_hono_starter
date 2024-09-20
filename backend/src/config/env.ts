import { z } from 'zod';

const schema = z.object({
  MONGO_DB: z.string(),
  MONGO_URI: z.string(),
});

export const env = schema.parse(Deno.env.toObject());
