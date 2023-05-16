import { Router } from "express";
import {
  create,
  findAllSale,
  findOneSale,
  deleteForId,
  updateForId,
} from "../controllers/sales.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/sales", findAllSale);
route.get("/sale/:idSale", findOneSale);
route.post("/sale/create", create);
route.delete("/sale/:idSale", deleteForId);
route.patch("/sale/:idSale", updateForId);

export default route;
