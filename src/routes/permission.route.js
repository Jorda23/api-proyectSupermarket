import { Router } from "express";
import {
  create,
  findAllPermissions,
  deleteForId
} from "../controllers/permission.controller.js";
import { validatePermissionRules } from "../validation/permission.validate.js"

const route = Router();

// Routes y validaciones correspondientes
route.get("/permissions", findAllPermissions);
route.post("/permission/create", validatePermissionRules, create);
route.delete("/permission/:idPermission", deleteForId);

export default route;
