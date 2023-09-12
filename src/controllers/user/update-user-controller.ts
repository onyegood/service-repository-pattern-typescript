import { Request, Response } from "express";

import { userService } from "../../dependencies/user";

export default async (req: Request, res: Response) => {
  try {
    const updatedUser = await userService.createUser(req.body);

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete user" });
  }
};
