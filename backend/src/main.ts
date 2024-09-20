import { Hono } from 'hono';

import { connectDB } from '$/config/database.ts';
import { todosRouter } from '$/routes/todos/router.ts';

const app = new Hono().route('/todos', todosRouter());

await connectDB();
Deno.serve(app.fetch);
