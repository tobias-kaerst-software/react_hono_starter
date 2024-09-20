import { QueryFunctionContext } from '@tanstack/react-query';

import { http } from '$/lib/fetcher';
import { todosSchema } from '$/services/todos/schemas/todos.schema';

export const getAllTodos = async ({ signal }: QueryFunctionContext) => {
  return http.get('todos', { schema: todosSchema, signal });
};
