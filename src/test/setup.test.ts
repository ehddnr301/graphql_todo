import mongoose from "mongoose";
// const { ApolloServer, gql } = require("apollo-server");
// const { createTestClient } = require("apollo-server-testing");
// const typeDefs = require("./typeDefs");
// const resolvers = require("./resolvers");
import { ApolloServer, gql } from "apollo-server";
import { createTestClient } from "apollo-server-testing";
import {
  mergedTypes as typeDefs,
  mergedResolvers as resolvers,
} from "../schema";
import { connectDatabse, clearDatabase, closeDatabase } from "./dbHandler";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { query, mutate } = createTestClient(server);

beforeAll(async () => {
  await connectDatabse();
});

afterEach(async () => await clearDatabase());

afterAll(async () => await closeDatabase());

describe("create User ", () => {
  //   /**
  //    * Tests that a valid product can be created through the productService without throwing any errors.
  //    */
  //   it("can be created correctly", async () => {
  //     expect(async () => {
  //       console.log("hi");
  //     }).not.toThrow();
  //   });
  describe("성공시", () => {
    test("create User", async () => {
      const CREATE_USER = gql`
        mutation createUser(
          $email: String!
          $username: String!
          $password: String!
        ) {
          createUser(email: $email, username: $username, password: $password) {
            id
            username
          }
        }
      `;

      const {
        data: {
          createUser: { id, username },
        },
      } = await mutate({
        mutation: CREATE_USER,
        variables: {
          email: "emailpart",
          username: "uuname",
          password: "passsword",
        },
      });
      // TODO : 응답결과 data{createUser { id : "~~", username:"uuname"}} 이렇게 찍히는데
      // TODO : createUser가 존재하지 않는다고한다
      console.log(a);
    });
  });
});
