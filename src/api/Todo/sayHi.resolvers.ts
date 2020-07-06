import { Greeting } from "../../types/graph";

export default {
  Query: {
    sayHi: (): Greeting => {
      return {
        text: "Hi",
        error: false,
      };
    },
  },
};
