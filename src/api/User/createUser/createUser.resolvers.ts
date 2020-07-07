import bcrypt from "bcrypt";
import User from "../../../models/User";
import { CreateUserMutationArgs } from "../../../types/graph";

export default {
  Mutation: {
    createUser: async (_: any, args: CreateUserMutationArgs) => {
      const { username, password, email } = args;
      const hashedPassword = bcrypt.hash(password, 10);

      const user = await User.create({
        username,
        password: hashedPassword,
        email,
      });
      return user;
    },
  },
};
