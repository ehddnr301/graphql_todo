import mongoose from "mongoose";
import { ITodo } from "./Todo";

export interface IUser extends mongoose.Document {
  email: String;
  username: String;
  password: String;
  todos: ITodo[];
}

const UserSchema = new mongoose.Schema({
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

const model = mongoose.model<IUser | mongoose.Document>("User", UserSchema);

export default model;
