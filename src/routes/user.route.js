import { Router } from "express";
import {
  create,
  findAllUser,
  deleteForId,
  findOneUser,
  updateForId,
} from "../controllers/user.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/users", findAllUser);
route.get("/user/:idUser", findOneUser);
route.post("/user/create", create);
route.delete("/user/:idUser", deleteForId);
route.patch("/user/:idUser", updateForId);

export default route;
