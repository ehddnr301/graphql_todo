import mongoose, { Schema, Document, Model } from "mongoose";
import { ITodo } from "./Todo";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  email: string;
  username: string;
  password: string;
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
