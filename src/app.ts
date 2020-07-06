import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from "./schema";

const server = new GraphQLServer({
  schema,
});

server.express.use(logger("dev"));

server.start({ port: 4000 }, () => console.log("✅ Server ON"));
