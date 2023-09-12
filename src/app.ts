import cors from "cors";
import express from "express";

import db from "./database/mogo-db";
import { userRouter } from "./routers/user-router";

const app = express();
const port = 3000;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.json());

const options = {
  origin: process.env.FRONTEND_DOMAIN,
  useSuccessStatus: 200,
};

app.use(cors(options));

app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
