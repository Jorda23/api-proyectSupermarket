import { Router } from "express";
import {
  findAllUser,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";

import {
  userValidationRules,
  userLoginValidationRules,
} from "../validation/user.validate.js";
const route = Router();

// Routes y validaciones correspondientes
route.get("/users", findAllUser);
route.post("/user/create", userValidationRules, registerUser);
route.post("/login", userLoginValidationRules, loginUser);

export default route;
