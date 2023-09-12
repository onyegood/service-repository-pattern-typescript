import { Request, Response } from "express";

import { userService } from "../../dependencies/user";

export default async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(req.params.id);

    return res.status(200).send();
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete user" });
  }
};
