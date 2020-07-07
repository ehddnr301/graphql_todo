import mongoose, { Schema, Document } from "mongoose";
import { ITodo } from "./Todo";

export interface IUser extends Document {
  email: String;
  username: String;
  password: String;
  todos: ITodo[];
}

const UserSchema = new Schema({
  email: {
    required: "email is required",
    type: String,
  },
  username: {
    required: "username is required",
    type: String,
  },
  password: {
    required: "password is required",
    type: String,
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

const model = mongoose.model<IUser>("User", UserSchema);

export default model;
