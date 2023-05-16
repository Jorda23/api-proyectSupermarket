import { Router } from "express";
import {
  findAllProductCategory,
  create,
} from "../controllers/productCategory.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/productCategories", findAllProductCategory);
route.post("/productCategory/create", create);

export default route;
