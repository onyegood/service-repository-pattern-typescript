import express from "express";

import {
  createUserController,
  deleteUserController,
  fetchUserController,
  fetchUsersController,
  updateUserController,
} from "../controllers/user";

const userRouter = express.Router();

userRouter.get("/users", fetchUsersController.bind(fetchUsersController));
userRouter.get("/users/:id", fetchUserController.bind(fetchUserController));
userRouter.post("/users", createUserController.bind(createUserController));
userRouter.put("/users/:id", updateUserController.bind(updateUserController));
userRouter.delete(
  "/users/:id",
  deleteUserController.bind(deleteUserController),
);

export { userRouter };
