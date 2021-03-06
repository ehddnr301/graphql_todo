import jest from "jest";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

const mongod = new MongoMemoryServer();

export const connectDatabse = async () => {
  const uri = await mongod.getConnectionString();

  const mongooseOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // autoReconnect: true,
    // reconnectTries: Number.MAX_VALUE,
    // reconnectInterval: 1000,
  };

  await mongoose.connect(uri, mongooseOpts);
};

export const closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

export const clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
};
