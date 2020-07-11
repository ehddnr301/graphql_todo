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
        mutation createTodo(
          $userId: String!
          $title: String!
          $description: String!
        ) {
          createTodo(
            userId: $userId
            title: $title
            description: $description
          ) {
            title
            description
          }
        }
      `;

      const a = await mutate({
        mutation: CREATE_TODO,
        variables: {
          userId: "wfjioqweowkod",
          title: "tttt",
          description: "dddd",
        },
      });
      console.log(a);
      // const {
      //   data: {
      //     createTodo: { title, description },
      //   },
      // } = await mutate({
      //   mutation: CREATE_TODO,
      //   variables: {
      //     title: "tttt",
      //     description: "dddd",
      //   },
      // });

      // expect(title).toEqual("tttt");
      // expect(description).toEqual("dddd");
    });
  });
});
