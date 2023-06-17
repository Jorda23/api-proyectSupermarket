import { Router } from "express";
import {
  create,
  findOneInvoiceDetail,
  findAllInvoice,
} from "../controllers/sales.controller.js";
import { validateSaleRules } from "../validation/sales.validate.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/sales", findAllInvoice);
route.get("/sale/:invoiceNumber", findOneInvoiceDetail);
route.post("/sale/create", validateSaleRules, create);

export default route;
