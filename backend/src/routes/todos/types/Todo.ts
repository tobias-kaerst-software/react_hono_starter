import { ObjectId } from 'mongodb';

export interface TodoSchema {
  _id?: ObjectId;
  completed: boolean;
  text: string;
}
