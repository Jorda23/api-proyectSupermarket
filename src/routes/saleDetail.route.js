import { Router } from "express";
import {
  create,
  findAllSaleDetail,
  findOneSaleDetail,
  deleteForId,
  updateForId,
} from "../controllers/saleDetail.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/saleDetails", findAllSaleDetail);
route.get("/saledetail/:idSaleDetail", findOneSaleDetail);
route.post("/saledetail/create", create);
route.delete("/saledetail/:idSaleDetail", deleteForId);
route.patch("/saledetail/:idSaleDetail", updateForId);

export default route;
