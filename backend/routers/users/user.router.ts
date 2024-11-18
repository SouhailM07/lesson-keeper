import { Router } from "express";
// ? controllers
import {
  createUser_c,
  deleteUser_c,
  editUser_c,
  getUser_c,
  getUsers_c,
} from "../../controllers/user.controller";

const router = Router();

router.get("/", getUsers_c);
router.get("/:id", getUser_c);
router.post("/create_user", createUser_c);
router.put("/edit_user", editUser_c);
router.delete("/delete_user", deleteUser_c);

export default router;
