import { z } from 'zod';

export const createTodoSchema = z.object({ text: z.string() });
export const updateTodoSchema = z
  .object({ completed: z.boolean(), text: z.string() })
  .partial()
  .refine(({ completed, text }) => completed !== undefined || text !== undefined, {
    message: 'One of the fields must be defined',
  });
