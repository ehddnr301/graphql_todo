import User from "../../../models/User";
import { CreateUserMutationArgs } from "../../../types/graph";

export default {
  Mutation: {
    createUser: async (_: any, args: CreateUserMutationArgs) => {
      const { username, password, email } = args;
      const user = await User.create({
        username,
        password,
        email,
      });
      return user;
    },
  },
};
