export const typeDefs = ["type User {\n  id: ID!\n  username: String!\n  password: String!\n  email: String!\n  todos: [Todo]\n}\n\ntype Todo {\n  id: ID!\n  title: String!\n  description: String!\n  creator: User!\n}\n\ntype Mutation {\n  createTodo(userId: String!, title: String!, description: String!): Todo!\n  createUser(email: String!, username: String!, password: String!): String!\n  deleteUser(id: ID!): Boolean!\n  loginUser(email: String!, password: String!): User\n}\n\ntype Query {\n  something: String!\n  readUser(id: ID!): User!\n}\n\ntype UserOrBoolean {\n  bool: Boolean!\n  user: User!\n}\n"];
/* tslint:disable */

export interface Query {
  something: string;
  readUser: User;
}

export interface ReadUserQueryArgs {
  id: string;
}

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  todos: Array<Todo> | null;
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  creator: User;
}

export interface Mutation {
  createTodo: Todo;
  createUser: string;
  deleteUser: boolean;
  loginUser: User | null;
}

export interface CreateTodoMutationArgs {
  userId: string;
  title: string;
  description: string;
}

export interface CreateUserMutationArgs {
  email: string;
  username: string;
  password: string;
}

export interface DeleteUserMutationArgs {
  id: string;
}

export interface LoginUserMutationArgs {
  email: string;
  password: string;
}

export interface UserOrBoolean {
  bool: boolean;
  user: User;
}
