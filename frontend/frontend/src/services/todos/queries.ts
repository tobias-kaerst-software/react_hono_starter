import { queryOptions } from '@tanstack/react-query';

import { getAllTodos } from '$/services/todos/fetcher';

export const todosQuery = queryOptions({ queryFn: getAllTodos, queryKey: ['todos'] });
