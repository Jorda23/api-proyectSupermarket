import { Router } from "express";
import {
  create,
  findAllPosition,
  deleteForId,
  findOnePosition,
  updateForId,
} from "../controllers/position.controller.js";
import { validatePositionRules } from "../validation/position.validate.js"

const route = Router();

// Routes y validaciones correspondientes
route.get("/positions", findAllPosition);
route.get("/position/:idPosition", findOnePosition);
route.post("/position/create", validatePositionRules, create);
route.delete("/position/:idPosition", deleteForId);
route.patch("/position/:idPosition", updateForId);

export default route;
