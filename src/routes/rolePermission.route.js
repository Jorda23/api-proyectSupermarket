import { Router } from "express";
import {
  findAllRolePermission,
  create,
} from "../controllers/rolePermission.controller.js";
import { validateRolePermissionRules } from "../validation/rolePermission.validate.js"

const route = Router();

// Routes y validaciones correspondientes
route.get("/rolePermissions", findAllRolePermission);
route.post("/rolePermission/create", validateRolePermissionRules, create);

export default route;
