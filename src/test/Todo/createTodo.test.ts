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

describe("create Todo ", () => {
  describe("성공시", () => {
    test("create Todo", async () => {
      const CREATE_TODO = gql`
        mutation createTodo($title: String!, $description: String!) {
          createUser(title: $title, description: $description) {
            title
            description
          }
        }
      `;

      const {
        data: {
          createTodo: { title, description },
        },
      } = await mutate({
        mutation: CREATE_TODO,
        variables: {
          title: "tttt",
          description: "dddd",
        },
      });

      expect(title).toEqual("tttt");
      expect(description).toEqual("dddd");
    });
  });
});
