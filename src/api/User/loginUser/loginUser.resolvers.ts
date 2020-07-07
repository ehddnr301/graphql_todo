import User from "../../../models/User";
import bcrypt from "bcrypt";
import { LoginUserMutationArgs } from "../../../types/graph";

export default {
  loginUser: async (_: any, args: LoginUserMutationArgs) => {
    const { email, password } = args;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return false;
    }
    const password1 = JSON.stringify(user.password);
    const valid = await bcrypt.compare(password, password1);
    if (!valid) {
      return false;
    }
  },
};
