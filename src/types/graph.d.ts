export const typeDefs = ["type Greeting {\n  text: String!\n  error: Boolean!\n}\n\ntype Query {\n  sayHi: Greeting!\n}\n"];
/* tslint:disable */

export interface Query {
  sayHi: Greeting;
}

export interface Greeting {
  text: string;
  error: boolean;
}
