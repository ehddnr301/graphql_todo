import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = "mongodb://localhost:27017/graphTodo";

mongoose.connect(PORT, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅Connected to DB");
const handleError = (err: Error) => console.log(`❌ Error ${err}`);

db.once("open", handleOpen);
db.on("error", handleError);
