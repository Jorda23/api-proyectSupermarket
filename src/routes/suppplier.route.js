import { Router } from "express";
import {
  create,
  findOneSupplier,
  findAllSupplier,
  deleteForId,
  updateForId,
} from "../controllers/supplier.controller.js";
import { validateSupplierRules } from "../validation/supplier.validate.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/suppliers", findAllSupplier);
route.get("/supplier/:idSupplier", findOneSupplier);
route.post("/supplier/create", validateSupplierRules, create);
route.delete("/supplier/:idSupplier", deleteForId);
route.patch("/supplier/:idSupplier", updateForId);

export default route;
