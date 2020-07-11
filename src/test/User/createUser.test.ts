import { ApolloServer, gql } from "apollo-server";
import {
  mergedTypes as typeDefs,
  mergedResolvers as resolvers,
} from "../../schema";
import { createTestClient } from "apollo-server-testing";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { query, mutate } = createTestClient(server);

describe("create User ", () => {
  describe("성공시", () => {
    test("create User", async () => {
      const CREATE_USER = gql`
        mutation createUser(
          $email: String!
          $username: String!
          $password: String!
        ) {
          createUser(email: $email, username: $username, password: $password)
        }
      `;

      const {
        data: { createUser },
      } = await mutate({
        mutation: CREATE_USER,
        variables: {
          email: "emailpart",
          username: "uuname",
          password: "passsword",
        },
      });
      console.log(createUser);

      // * strictNullChecks 을 tscofing 에서 false처리 해주니 해결되었습니다.
      // expect(email).toEqual("emailpart");
      // expect(username).toEqual("uuname");
    });
  });
});
