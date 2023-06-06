import { Router } from "express";
import {
  create,
  findAllProduct,
  findOneProduct,
  deleteForId,
  updateForId
} from "../controllers/products.controller.js";
import { validateProductRules } from "../validation/products.validate.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/products", findAllProduct);
route.get("/product/:idProduct", findOneProduct);
route.post("/product/create", validateProductRules, create);
route.delete("/product/:idProduct", deleteForId);
route.patch("/product/:idProduct", updateForId);

export default route;
