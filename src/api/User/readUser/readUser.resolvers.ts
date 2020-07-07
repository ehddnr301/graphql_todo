import User from "../../../models/User";
import { ReadUserQueryArgs } from "../../../types/graph";

export default {
  Mutation: {
    readUser: async (_: any, args: ReadUserQueryArgs) => {
      const { id } = args;
      return User.findById(id);
    },
  },
};
