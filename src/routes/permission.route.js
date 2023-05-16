import { Router } from "express";
import {
  create,
  findAllPermissions,
  deleteForId
} from "../controllers/permission.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/permissions", findAllPermissions);
route.post("/permission/create", create);
route.delete("/permission/:idPermission", deleteForId);

export default route;
