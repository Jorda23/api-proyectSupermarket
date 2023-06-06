import { body } from "express-validator";

export const userValidationRules = [
  body("userName").notEmpty().withMessage("The username is required."),
  body("password").notEmpty().withMessage("The password is required."),
];
