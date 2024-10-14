import { Db, MongoClient } from 'mongodb';

import { env } from '$/config/env.ts';

const client = new MongoClient(env.MONGO_URI);
let database: Db;

export const connectDB = async () => {
  await client.connect();
};

export const db = () => {
  if (!database) database = client.db(env.MONGO_DB);
  return database;
};
