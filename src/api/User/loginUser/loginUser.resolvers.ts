import User from "../../../models/User";
import bcrypt from "bcrypt";
import { LoginUserMutationArgs } from "../../../types/graph";

export default {
  Mutation: {
    loginUser: async (_: any, args: LoginUserMutationArgs) => {
      const { email, password } = args;

      const user = await User.findOne({ where: { email } });
      if (!user) {
        return false;
      }
      const valid = password == user.password;
      if (!valid) {
        return false;
      } else {
        return user;
      }
    },
  },
};
