import { Router } from "express";
import {
  create,
  findAllEmployees,
  deleteForId,
} from "../controllers/employees.controller.js";
import { validateEmployeeRules } from "../validation/employees.validate.js";
const route = Router();

// Routes y validaciones correspondientes
route.get("/employees", findAllEmployees);
route.post("/employee/create", validateEmployeeRules, create);
route.delete("/employee/:idEmployee", deleteForId);

export default route;
