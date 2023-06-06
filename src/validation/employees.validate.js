import { body } from "express-validator";

export const validateEmployeeRules = [
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
  body("age")
    .notEmpty()
    .withMessage("Age is required")
    .isInt({ min: 0 })
    .withMessage("Age must be a positive integer"),
  body("birthDate").notEmpty().withMessage("Birth date is required"),
  body("idUser").notEmpty().withMessage("User ID is required"),
];
