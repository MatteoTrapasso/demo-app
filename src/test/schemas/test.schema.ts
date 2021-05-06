import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const TestSchema = new mongoose.Schema({
  text: String,
});
