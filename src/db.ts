import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose.connect(`mongodb://mongoDB:27017/graphTodo`, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅Connected to DB");
const handleError = (err: Error) => console.log(`❌ Error ${err}`);

db.once("open", handleOpen);
db.on("error", handleError);
