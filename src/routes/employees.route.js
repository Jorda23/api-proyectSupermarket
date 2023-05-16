import { Router } from "express";
import {
  create,
  findAllEmployees,
  deleteForId,
} from "../controllers/employees.controller.js";

const route = Router();

// Routes y validaciones correspondientes
route.get("/employees", findAllEmployees);
route.post("/employee/create", create);
route.delete("/employee/:idEmployee", deleteForId);

export default route;
