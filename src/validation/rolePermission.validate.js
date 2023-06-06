import { body } from "express-validator";

// Validation middleware for creating a role permission
export const validateRolePermissionRules = [
  body("idRole").notEmpty().withMessage("Role ID is required"),
  body("idPermission").notEmpty().withMessage("Permission ID is required"),
];
