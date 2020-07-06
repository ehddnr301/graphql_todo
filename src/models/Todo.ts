import mongoose from "mongoose";
import { IUser } from "./User";

export interface ITodo extends mongoose.Document {
  title: String;
  description: String;
  creator: IUser;
  createdAt: Date;
}

const TodoSchema: mongoose.Schema<ITodo> = new mongoose.Schema({
  title: {
    required: "Title is required",
    type: String,
  },
  description: {
    required: "description is required",
    type: String,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    default: Date.now,
    type: Date,
  },
});

const model = mongoose.model<ITodo | mongoose.Document>("Todo", TodoSchema);

export default model;
