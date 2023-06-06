import { Router } from "express";
import {
  create,
  findAllOrder,
  deleteForId,
  findOneOrder,
  updateForId,
} from "../controllers/orders.controller.js";
import { validateOrderRules } from "../validation/orders.validate.js"

const route = Router();

// Routes y validaciones correspondientes
route.get("/orders", findAllOrder);
route.get("/order/:orderNumber", findOneOrder);
route.post("/order/create", validateOrderRules, create);
route.delete("/order/:orderNumber", deleteForId);
route.patch("/order/:orderNumber", updateForId);

export default route;
