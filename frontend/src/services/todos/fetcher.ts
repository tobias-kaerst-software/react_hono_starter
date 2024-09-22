import { QueryFunctionContext } from '@tanstack/react-query';
import { z } from 'zod';

import { http } from '$/lib/fetcher';
import { todoSchema } from '$/services/todos/schemas/todos.schema';

export const getAllTodos = async ({ signal }: QueryFunctionContext) => {
  return http.get('todos', { schema: z.array(todoSchema), signal });
};

export const createTodo = async ({ text }: { text: string }) => {
  return http.post('todos', { json: { text }, schema: todoSchema });
};

export const updateTodo = async ({ completed, id }: { completed: boolean; id: string }) => {
  return http.patch(`todos/${id}`, { json: { completed }, schema: todoSchema });
};
