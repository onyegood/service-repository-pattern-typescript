import { config } from "dotenv";
import mongoose from "mongoose";
config();

const mongoUri = process.env.MONGODB_URI || "";

mongoose.connect(mongoUri, {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default db;
