import { CreateTodoMutationArgs } from "../../../types/graph";
import Todo from "../../../models/Todo";

export default {
  Mutation: {
    createTodo: async (_: any, args: CreateTodoMutationArgs) => {
      const { userId, title, description } = args;
      const todo = await Todo.create({
        title,
        description,
        creator: userId,
      });

      return todo;
    },
  },
};
