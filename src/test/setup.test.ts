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
      // * strictNullChecks 을 tscofing 에서 false처리 해주니 해결되었습니다.
    });
  });
});
