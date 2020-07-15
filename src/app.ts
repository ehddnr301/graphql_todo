import dotenv from "dotenv";
dotenv.config();
import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import schema from "./schema";
import "./db";

const schema1: any = schema;

const server = new GraphQLServer({
  schema: schema1,
});

server.express.use(logger("dev"));
server.express.use(helmet());

server.start({ port: 5000 }, () => console.log("✅ Server ON"));
