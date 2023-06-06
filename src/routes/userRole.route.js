import { Router } from "express";
import { findAllUserRole, create } from "../controllers/userRole.controller.js";
import { validateUserRoleRules } from "../validation/userRole.validate.js"

const route = Router();

// Routes y validaciones correspondientes
route.get("/userRoles", findAllUserRole);
route.post("/userRole/create", validateUserRoleRules, create);

export default route;
