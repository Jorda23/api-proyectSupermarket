import { Router } from "express";
import {
  create,
  findAllCategory,
  deleteForId,
  findOneCategory,
  updateForId,
} from "../controllers/category.controller.js";
import {  validateCategoryrules } from "../validation/category.validate.js"

const route = Router();

// Routes y validaciones correspondientes
route.get("/categories", findAllCategory);
route.get("/category/:idCategory", findOneCategory);
route.post("/category/create", validateCategoryrules, create);
route.delete("/category/:idCategory", deleteForId);
route.patch("/category/:idCategory", updateForId);

export default route;
