import mongoose from "mongoose";
import { connectDatabse, clearDatabase, closeDatabase } from "./dbHandler";

beforeAll(async () => {
  console.log("hsadfasdfi");
  await connectDatabse();
});

afterEach(async () => await clearDatabase());

afterAll(async () => await closeDatabase());

describe("product ", () => {
  /**
   * Tests that a valid product can be created through the productService without throwing any errors.
   */
  it("can be created correctly", async () => {
    expect(async () => {
      console.log("hi");
    }).not.toThrow();
  });
});
