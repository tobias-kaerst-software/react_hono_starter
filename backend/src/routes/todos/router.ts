import { Hono } from 'hono';
import { validator } from 'hono/validator';
import { ObjectId } from 'mongodb';

import { db } from '$/config/database.ts';
import { zod } from '$/lib/middlewares/validator.ts';
import { createTodoSchema, updateTodoSchema } from '$/routes/todos/schemas/todo.schema.ts';
import { TodoSchema } from '$/routes/todos/types/Todo.ts';

export const todosRouter = () => {
  const router = new Hono();

  const collection = db().collection<TodoSchema>('todos');

  router.get('/', async (c) => {
    return c.json(await collection.find().toArray());
  });

  router.post('/', validator('json', zod(createTodoSchema)), async (c) => {
    const todo: TodoSchema = { ...c.req.valid('json'), completed: false };
    const { insertedId } = await collection.insertOne(todo);
    return c.json({ ...todo, _id: insertedId });
  });

  router.get('/:id', async (c) => {
    const todo = await collection.findOne({ _id: new ObjectId(c.req.param().id) });
    if (!todo) return c.json({ msg: 'todo_missing' }, 404);
    return c.json(todo);
  });

  router.patch('/:id', validator('json', zod(updateTodoSchema)), async (c) => {
    const updated = await collection.findOneAndUpdate(
      { _id: new ObjectId(c.req.param().id) },
      { $set: c.req.valid('json') },
      { returnDocument: 'after' },
    );
    if (!updated) return c.json({ msg: 'todo_missing' }, 404);
    return c.json(updated);
  });

  router.delete('/:id', async (c) => {
    const { deletedCount } = await collection.deleteOne({ _id: new ObjectId(c.req.param().id) });
    if (deletedCount === 0) return c.json({ msg: 'todo_missing' }, 404);
    return c.json({ msg: 'todo deleted' });
  });

  return router;
};
