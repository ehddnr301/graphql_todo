import { connectDatabse, clearDatabase, closeDatabase } from "./dbHandler";
import "./User/createUser.test";

beforeAll(async () => {
  await connectDatabse();
});

afterEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await closeDatabase();
});
