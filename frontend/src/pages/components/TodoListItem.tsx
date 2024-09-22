import { FC } from 'react';

import { Checkbox } from '$/components/ui/checkbox';
import { HStack } from '$/components/ui/hstack';
import { cn } from '$/lib/utils';
import { useUpdateTodo } from '$/services/todos/mutations/useUpdateTodo';
import { Todo } from '$/services/todos/schemas/todos.schema';

interface Props {
  disabled?: boolean;
  todo: Todo;
}

export const TodoListItem: FC<Props> = ({ disabled = false, todo }) => {
  const { mutate, variables } = useUpdateTodo();

  return (
    <HStack className={cn(disabled && 'opacity-25')}>
      <Checkbox
        checked={variables ? variables.completed : todo.completed}
        disabled={disabled}
        id={`todo-${todo._id}`}
        onCheckedChange={() => mutate({ completed: !todo.completed, id: todo._id })}
      />
      <label className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed' htmlFor={`todo-${todo._id}`}>
        {todo.text}
      </label>
    </HStack>
  );
};
