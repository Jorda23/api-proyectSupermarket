import { body } from "express-validator";

// Validation middleware for creating a role
export const validateRoleRules = [
  body("roleName").notEmpty().withMessage("Role name is required"),
];
