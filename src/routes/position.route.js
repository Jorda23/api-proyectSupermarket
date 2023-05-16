import { Router } from "express";
import {
  create,
  findAllPosition,
  deleteForId,
  findOnePosition,
  updateForId,
} from "../controllers/position.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/positions", findAllPosition);
route.get("/position/:idPosition", findOnePosition);
route.post("/position/create", create);
route.delete("/position/:idPosition", deleteForId);
route.patch("/position/:idPosition", updateForId);

export default route;
