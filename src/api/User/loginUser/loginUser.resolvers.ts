import User from "../../../models/User";
import bcrypt from "bcrypt";
import { LoginUserMutationArgs } from "../../../types/graph";

export default {
  Mutation: {
    loginUser: async (_: any, args: LoginUserMutationArgs) => {
      const { email, password } = args;

      const user = await User.findOne({ email });
      if (!user) {
        return null;
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return null;
      } else {
        return user;
      }
    },
  },
};
