import { Router } from "express";
import {
  create,
  findAllOrderDetail,
  deleteForId,
  findOneOrderDetail,
  updateForId,
} from "../controllers/orderDetail.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/orderDetails", findAllOrderDetail);
route.get("/orderDetail/:idDetail", findOneOrderDetail);
route.post("/orderDetail/create", create);
route.delete("/orderDetail/:idDetail", deleteForId);
route.patch("/orderDetail/:idDetail", updateForId);

export default route;
