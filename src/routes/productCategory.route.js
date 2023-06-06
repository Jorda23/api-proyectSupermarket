import { Router } from "express";
import {
  findAllProductCategory,
  create,
} from "../controllers/productCategory.controller.js";
import { validateProductCategoryRules } from "../validation/productCategory.validate.js"

const route = Router();

// Routes y validaciones correspondientes
route.get("/productCategories", findAllProductCategory);
route.post("/productCategory/create", validateProductCategoryRules, create);

export default route;
