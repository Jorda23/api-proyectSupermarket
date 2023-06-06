import { Router } from "express";
import {
  create,
 deleteForId,
 findAllRole,
 findOneRole,
 updateForId
} from "../controllers/role.controller.js";
import { validateRoleRules } from "../validation/role.validate.js"

const route = Router();

// Routes y validaciones correspondientes
route.get("/roles", findAllRole);
route.get("/role/:idRole", findOneRole);
route.post("/role/create", validateRoleRules, create);
route.delete("/role/:idRole", deleteForId);
route.patch("/role/:idRole", updateForId);

export default route;
