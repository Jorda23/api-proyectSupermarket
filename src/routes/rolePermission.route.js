import { Router } from "express";
import {
  findAllRolePermission,
  create,
} from "../controllers/rolePermission.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/rolePermissions", findAllRolePermission);
route.post("/rolePermission/create", create);

export default route;
