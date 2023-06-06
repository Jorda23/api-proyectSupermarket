import { body } from "express-validator";

// Validation middleware for creating a permission
export const validatePermissionRules = [
  body("permissionName")
    .notEmpty()
    .withMessage("Permission name is required")
    .isString()
    .withMessage("Permission name must be a string"),
];
