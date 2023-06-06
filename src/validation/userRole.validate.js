import { body } from "express-validator";

// Validation middleware for creating a user role
export const validateUserRoleRules = [
  body("idUser").notEmpty().withMessage("User ID is required"),
  body("idRole").notEmpty().withMessage("Role ID is required"),
];
