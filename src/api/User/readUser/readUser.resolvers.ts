import User from "../../../models/User";
import { ReadUserQueryArgs } from "../../../types/graph";

export default {
  Query: {
    readUser: async (_: any, args: ReadUserQueryArgs) => {
      const { id } = args;
      try {
        return User.findById(id);
      } catch {
        return false;
      }
    },
  },
};
