import { Router } from "express";
import {
  create,
  findAllSale,
  findOneSale,
  deleteForId,
  updateForId,
} from "../controllers/sales.controller.js";
import { validateSaleRules } from "../validation/sales.validate.js"

const route = Router();

// Routes y validaciones correspondientes
route.get("/sales", findAllSale);
route.get("/sale/:idSale", findOneSale);
route.post("/sale/create", validateSaleRules, create);
route.delete("/sale/:idSale", deleteForId);
route.patch("/sale/:idSale", updateForId);

export default route;
