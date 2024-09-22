import { useMutation } from '@tanstack/react-query';

import { queryClient } from '$/lib/fetcher';
import { createTodo } from '$/services/todos/fetcher';

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: createTodo,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });
};
