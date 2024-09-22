import { Trans } from '@lingui/macro';
import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';

import { Button } from '$/components/ui/button';
import { HStack } from '$/components/ui/hstack';
import { Input } from '$/components/ui/input';
import { Stack } from '$/components/ui/stack';
import { Typography } from '$/components/ui/typography';
import { TodoListItem } from '$/pages/components/TodoListItem';
import { useCreateTodo } from '$/services/todos/mutations/useCreateTodo';
import { todosQuery } from '$/services/todos/queries';
import { useBearStore } from '$/stores/useBearStore';

export const Homepage = () => {
  const bears = useBearStore.use.bears();
  const increment = useBearStore.get.increment();

  const inputRef = useRef<HTMLInputElement>(null);

  const { data, status } = useQuery(todosQuery);
  const { isPending, mutate, variables } = useCreateTodo();

  const createTodo = () => {
    if (!inputRef.current) return;
    mutate({ text: inputRef.current.value });
    inputRef.current.value = '';
  };

  return (
    <Stack className='container max-w-[750px] gap-10 pt-24'>
      <div>
        <Typography variant='h1'>
          <Trans>Einführung in React.js</Trans>
        </Typography>
        <Typography variant='p'>
          <Trans>
            React.js, allgemein bekannt als React, ist eine Open-Source-JavaScript-Bibliothek zur Erstellung von
            Benutzeroberflächen, insbesondere für Single-Page-Anwendungen. Entwickelt von Facebook, ermöglicht React
            Entwicklern, große Webanwendungen zu erstellen, die effizient auf Datenänderungen reagieren und sich
            entsprechend aktualisieren können.
          </Trans>
        </Typography>
        <Typography variant='h2'>
          <Trans>Erste Schritte</Trans>
        </Typography>
        <Typography variant='p'>
          <Trans>
            Um mit React zu beginnen, müssen Node.js und npm (Node Package Manager) auf Ihrem Computer installiert sein.
            Sie können eine neue React-Anwendung mit dem folgenden Befehl erstellen:
          </Trans>
        </Typography>
        <Button className='w-full' onClick={increment}>
          Mehr erfahren {bears}
        </Button>
      </div>

      <Stack className='gap-4'>
        <HStack>
          <Input onKeyDown={(e) => e.key === 'Enter' && createTodo()} placeholder='Add a todo' ref={inputRef} />
          <Button onClick={createTodo}>+</Button>
        </HStack>

        {status === 'pending' && <div>Loading...</div>}
        {status === 'error' && <div>Error</div>}
        {status === 'success' && data && (
          <Stack>
            {data.map((todo) => (
              <TodoListItem key={todo._id} todo={todo} />
            ))}
            {isPending && <TodoListItem disabled todo={{ _id: 'new-todo', completed: false, ...variables }} />}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
