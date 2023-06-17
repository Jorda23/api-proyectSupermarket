import { Router } from "express";
import {
  create,
  findAllProduct,
  findOneProduct,
  deleteForId
} from "../controllers/products.controller.js";
import { validateProductRules } from "../validation/products.validate.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/products", findAllProduct);
route.get("/product/:productId", findOneProduct);
route.post("/product/create", validateProductRules, create);
route.delete("/product/:productId", deleteForId);

export default route;
