import { ObjectId } from 'mongodb';

export interface TodoSchema {
  _id?: ObjectId;
  checked: boolean;
  text: string;
}
