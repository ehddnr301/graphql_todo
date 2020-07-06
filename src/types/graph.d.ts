export const typeDefs = ["type User {\n  id: ID!\n  username: String!\n  email: String!\n  todos: [Todo]\n}\n\ntype Todo {\n  id: ID!\n  title: String!\n  description: String!\n  creator: User!\n}\n\ntype Mutation {\n  createUser(email: String!, username: String!, password: String!): User!\n}\n\ntype Query {\n  something: String!\n}\n"];
/* tslint:disable */

export interface Query {
  something: string;
}

export interface Mutation {
  createUser: User;
}

export interface CreateUserMutationArgs {
  email: string;
  username: string;
  password: string;
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
