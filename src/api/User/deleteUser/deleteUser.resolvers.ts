import User from "../../../models/User";
import { DeleteUserMutationArgs } from "../../../types/graph";

export default {
  Mutation: {
    deleteUser: async (_: any, args: DeleteUserMutationArgs) => {
      const { id } = args;
      try {
        await User.findByIdAndDelete(id);
        return true;
      } catch {
        return false;
      }
    },
  },
};
