import { Context } from 'hono';
import { ZodType } from 'zod';

export const zod = <T>(schema: ZodType<T>) => {
  return (value: unknown, c: Context) => {
    const parsed = schema.safeParse(value);
    if (!parsed.success) return c.json({ error: parsed.error.format(), msg: 'validation_error' }, 400);
    return parsed.data;
  };
};
