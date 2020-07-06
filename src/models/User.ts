import mongoose from "mongoose";
import { ITodo } from "./Todo";

export interface IUser extends mongoose.Document {
  email: String;
  todos: ITodo[];
}

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

const model = mongoose.model<IUser | mongoose.Document>("User", UserSchema);

export default model;
