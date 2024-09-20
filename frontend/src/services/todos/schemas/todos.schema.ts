import { z } from 'zod';

export const todoSchema = z.object({
  _id: z.string(),
  completed: z.boolean(),
  text: z.string(),
});

export const todosSchema = z.array(todoSchema);