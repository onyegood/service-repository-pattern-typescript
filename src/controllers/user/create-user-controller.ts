import { Request, Response } from "express";

import { userService } from "../../dependencies/user";

export default async (req: Request, res: Response) => {
  try {
    const newUser = await userService.createUser(req.body);

    return res.status(201).send(newUser);
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete user" });
  }
};
