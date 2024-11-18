import { Router } from "express";
import { Request, Response } from "express";
// ? controllers
import {
  createUser_c,
  deleteUser_c,
  editUser_c,
  getUser_c,
  getUsers_c,
} from "../../controllers/user.controller";
import User from "../../models/user.mode";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  let users = await User.find({});
  res.status(200).send(users);
});
router.get("/:id", getUser_c);
router.post("/create_user", createUser_c);
router.put("/edit_user", editUser_c);
router.delete("/delete_user", deleteUser_c);

export default router;
