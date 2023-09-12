import { Request, Response } from "express";

import { userService } from "../../dependencies/user";

export default async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserById(req.params.id);

    if (!user) {
      return res.status(500).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve user" });
  }
};
