import { Router } from "express";
import { findAllUserRole, create } from "../controllers/userRole.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/userRoles", findAllUserRole);
route.post("/userRole/create", create);

export default route;
