import { Router } from "express";
import {
  create,
 deleteForId,
 findAllRole,
 findOneRole,
 updateForId
} from "../controllers/role.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/roles", findAllRole);
route.get("/role/:idRole", findOneRole);
route.post("/role/create", create);
route.delete("/role/:idRole", deleteForId);
route.patch("/role/:idRole", updateForId);

export default route;
