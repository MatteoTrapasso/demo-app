import { Document } from 'mongoose';
export interface Test extends Document {
  readonly text: string;
  readonly created_at: Date;
}
