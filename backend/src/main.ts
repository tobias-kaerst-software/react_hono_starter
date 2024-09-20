import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { connectDB } from '$/config/database.ts';
import { todosRouter } from '$/routes/todos/router.ts';

const app = new Hono().use('*', cors()).route('/todos', todosRouter());

await connectDB();
Deno.serve(app.fetch);
