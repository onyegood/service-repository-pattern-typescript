import { Request, Response } from "express";

import { userService } from "../../dependencies/user";

export default async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUser();

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve user" });
  }
};
