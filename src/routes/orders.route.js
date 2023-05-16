import { Router } from "express";
import {
  create,
  findAllOrder,
  deleteForId,
  findOneOrder,
  updateForId,
} from "../controllers/orders.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/orders", findAllOrder);
route.get("/order/:orderNumber", findOneOrder);
route.post("/order/create", create);
route.delete("/order/:orderNumber", deleteForId);
route.patch("/order/:orderNumber", updateForId);

export default route;
