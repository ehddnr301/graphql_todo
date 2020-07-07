export const typeDefs = ["type User {\n  id: ID!\n  username: String!\n  email: String!\n  todos: [Todo]\n}\n\ntype Todo {\n  id: ID!\n  title: String!\n  description: String!\n  creator: User!\n}\n\ntype Mutation {\n  createUser(email: String!, username: String!, password: String!): User!\n  deleteUser(id: ID!): Boolean!\n}\n\ntype Query {\n  something: String!\n  readUser(id: ID!): UserOrBoolean!\n}\n\ntype UserOrBoolean {\n  bool: Boolean!\n  user: User!\n}\n"];
/* tslint:disable */

export interface Query {
  something: string;
  readUser: UserOrBoolean;
}

export interface ReadUserQueryArgs {
  id: string;
}

export interface UserOrBoolean {
  bool: boolean;
  user: User;
}

export interface User {
  id: string;
  username: string;
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
  createUser: User;
  deleteUser: boolean;
}

export interface CreateUserMutationArgs {
  email: string;
  username: string;
  password: string;
}

export interface DeleteUserMutationArgs {
  id: string;
}
