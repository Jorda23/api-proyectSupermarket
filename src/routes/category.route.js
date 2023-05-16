import { Router } from "express";
import {
  create,
  findAllCategory,
  deleteForId,
  findOneCategory,
  updateForId,
} from "../controllers/category.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/categories", findAllCategory);
route.get("/category/:idCategory", findOneCategory);
route.post("/category/create", create);
route.delete("/category/:idCategory", deleteForId);
route.patch("/category/:idCategory", updateForId);

export default route;
