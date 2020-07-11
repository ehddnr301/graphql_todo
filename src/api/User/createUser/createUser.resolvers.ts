import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import User from "../../../models/User";
import { CreateUserMutationArgs } from "../../../types/graph";
import jwt from "jsonwebtoken";

const generateToken = (id: any) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

export default {
  Mutation: {
    createUser: async (_: any, args: CreateUserMutationArgs) => {
      const { username, password, email } = args;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        username,
        password: hashedPassword,
        email,
      });
      const userId = user.id;
      const token = generateToken(userId);
      return token;
    },
  },
};
