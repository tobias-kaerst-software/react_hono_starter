import { useMutation } from '@tanstack/react-query';

import { queryClient } from '$/lib/fetcher';
import { updateTodo } from '$/services/todos/fetcher';

export const useUpdateTodo = () => {
  return useMutation({
    mutationFn: updateTodo,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });
};
