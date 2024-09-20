import { z } from 'zod';

export const createTodoSchema = z.object({ text: z.string() });
