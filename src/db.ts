import mongoose from "mongoose";
const PORT = "mongodb://localhost:27017/graphTodo";
console.log(process.env.MONGO_URL);

mongoose.connect(PORT, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅Connected to DB");
const handleError = (err: Error) => console.log(`❌ Error ${err}`);

db.once("open", handleOpen);
db.on("error", handleError);
